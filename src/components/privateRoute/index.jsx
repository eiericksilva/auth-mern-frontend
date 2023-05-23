import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

const PrivateRoute = ({ children }) => {
  const token = Cookies.get("token");

  if (token) {
    const payload = jwtDecode(token);

    if (Date.now() < payload.exp * 1000) {
      return children;
    }

    Cookies.remove("token");
  }
  return <Navigate to="/" />;
};

export default PrivateRoute;
