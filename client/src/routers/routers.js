import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import { AuthProvider } from "../context/authContext";
import Header from "../components/header";
import ProtectedRoute from "../utils/protectedRoute";

export default function Routers() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <Header />
                <Routes>
                  <Route path="/" Component={Home} />
                </Routes>
              </ProtectedRoute>
            }
          />

          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
