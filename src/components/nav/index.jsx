import { useContext } from "react";
import { DialogContext } from "../../context/ModalContext";
import DialogGeneric from "../dialog";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { handleOpenModal } = useContext(DialogContext);
  const { logoutUser } = useContext(UserContext);

  return (
    <>
      <nav className="bg-slate-600 text-white flex justify-between items-center p-4 mb-4 shadow-md">
        <div>
          <h1 className="text-xl md:text-3xl">Site de Notícias</h1>
          <span className="text-sm">seu portal de notícias</span>
        </div>
        <div className="space-x-4">
          <Link className="p-3 text-sm text-white hover:text-slate-200" to="/">
            Home
          </Link>
          <Link
            className="p-3 text-sm text-white hover:text-slate-200"
            to="/profile"
          >
            Profile
          </Link>
          <button
            className="p-3 text-sm text-white hover:text-slate-200"
            onClick={handleOpenModal}
          >
            Create Post
          </button>
          <button
            className="p-3 text-sm text-white hover:text-slate-200"
            onClick={logoutUser}
          >
            Sign Out
          </button>
        </div>
      </nav>
      <DialogGeneric />
    </>
  );
};

export default Navbar;
