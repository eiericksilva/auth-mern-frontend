import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = Cookies.get("token");
  if (token) {
    return children;
  }
  return <Navigate to="/" />;
};

export default PrivateRoute;
