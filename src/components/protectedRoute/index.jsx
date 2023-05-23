import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const ProtectedRoute = ({ children }) => {
  const token = Cookies.get("token");
  if (token) {
    const payload = jwtDecode(token);

    if (Date.now() < payload.exp * 1000) {
      return <Navigate to="/dashboard" />;
    }

    Cookies.remove("token");
  }

  return children;
};

export default ProtectedRoute;
