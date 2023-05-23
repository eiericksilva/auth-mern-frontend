import Button from "../button";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const logout = () => {
    Cookies.remove("token");
    navigate("/");
  };

  return (
    <header className="flex justify-between items-center p-4 w-screen">
      <h1 className="text-xl md:text-3xl">Kanban Taskboard</h1>
      <Button onClick={logout}>Sign Out</Button>
    </header>
  );
};

export default Header;
