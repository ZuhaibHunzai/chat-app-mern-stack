import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/login";
import Register from "../pages/register";
import Home from "../pages/home";
import { AuthProvider } from "../context/authContext";

export default function Routers() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/register" Component={Register} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}
