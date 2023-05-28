import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const logout = () => {
    Cookies.remove("token");
    navigate("/");
  };

  return (
    <nav className="bg-slate-600 text-white flex justify-between items-center p-4 mb-4 shadow-md">
      <div>
        <h1 className="text-xl md:text-3xl">Kanban Taskboard</h1>
        <span className="text-sm">seu portal de notícias</span>
      </div>
      <div className="space-x-4">
        <button className="border border-white p-3">Edit Profile</button>
        <button className="border border-white p-3">Create Post</button>
        <button className="border border-red-600 p-3" onClick={logout}>
          Sign Out
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
