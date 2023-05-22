import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import Button from "../../components/button";

const Dashboard = () => {
  const navigate = useNavigate();
  const logout = () => {
    Cookies.remove("token");
    navigate("/");
  };
  return (
    <div className="flex flex-col items-center">
      <h3>Página acessível somente para autenticados</h3>
      <Button onClick={logout}>Sign Out</Button>
    </div>
  );
};

export default Dashboard;
