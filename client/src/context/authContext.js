import { createContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { authConfig } from "../configs/auth";
import { axiosClient } from "../configs/axiosClient";

const provider = {
  user: null,
  loading: true,
  setUser: () => {},
  setLoading: () => Boolean,
  login: () => Promise.resolve(),
  logout: () => Promise.resolve(),
  signup: () => Promise.resolve(),
};

const AuthContext = createContext(provider);

const AuthProvider = ({ children }) => {
  // ** states
  const [user, setUser] = useState(provider.user);
  const [loading, setLoading] = useState(provider.loading);

  // ** hooks

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const initAuth = async () => {
      const storedToken = localStorage.getItem(authConfig.storageTokenKeyName);
      if (storedToken) {
        setLoading(true);
        await axiosClient
          .get(authConfig.meEndpoint, {
            headers: {
              Authorization: storedToken,
            },
          })
          .then(async (response) => {
            if (localStorage.getItem(authConfig.storageTokenKeyName))
              localStorage.setItem(
                authConfig.storageTokenKeyName,
                response.data.accessToken
              );

            setLoading(false);
            setUser({ ...response.data.userData });
          })
          .catch(() => {
            localStorage.removeItem("userData");
            localStorage.removeItem("refreshToken");
            localStorage.removeItem(authConfig.storageTokenKeyName);
            setUser(null);
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    };
    initAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = (params, errorCallback, successCallback) => {
    axiosClient
      .post(authConfig.loginEndPoint, params)
      .then(async (response) => {
        if (params.rememberMe) {
          localStorage.setItem(
            authConfig.storageTokenKeyName,
            response.data.accessToken
          );
        }

        const queryParams = new URLSearchParams(location.search);
        const returnUrl = queryParams.get("returnUrl");
        setUser({ ...response.data.userData });
        if (params.rememberMe)
          localStorage.setItem(
            "userData",
            JSON.stringify(response.data.userData)
          );

        const redirectURL = returnUrl && returnUrl !== "/" ? returnUrl : "/";
        navigate(redirectURL);
        if (successCallback) successCallback();
      })
      .catch((err) => {
        if (errorCallback) errorCallback(err);
      });
  };
  const handleSignUp = (params, errorCallback, successCallback) => {
    axiosClient
      .post(authConfig.registerEndpoint, params)
      .then(() => {
        navigate("/login");
        if (successCallback) successCallback();
      })
      .catch((err) => {
        if (errorCallback) errorCallback(err);
      });
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("userData");
    localStorage.removeItem(authConfig.storageTokenKeyName);
    navigate("/login");
  };

  const values = {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
    signup: handleSignUp,
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
