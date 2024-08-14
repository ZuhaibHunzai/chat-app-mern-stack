import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const ProtectedRoute = ({ children }) => {
  const auth = useAuth();
  let location = useLocation();

  if (!auth?.user) {
    return <Navigate to="/login" state={location} replace />;
  }

  return children;
};

export default ProtectedRoute;
