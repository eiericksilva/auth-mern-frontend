import { useContext } from "react";
import { DialogContext } from "../../context/ModalContext";
import DialogGeneric from "../dialog";
import { UserContext } from "../../context/UserContext";

const Navbar = () => {
  const { handleOpenModal } = useContext(DialogContext);
  const { user, logoutUser } = useContext(UserContext);

  return (
    <>
      <nav className="bg-slate-600 text-white flex justify-between items-center p-4 mb-4 shadow-md">
        <div>
          <h1 className="text-xl md:text-3xl">Site de Notícias</h1>
          <span className="text-sm">seu portal de notícias</span>
        </div>
        <div className="space-x-4">
          <button className="border border-white p-3">Edit Profile</button>
          <button className="border border-white p-3" onClick={handleOpenModal}>
            Create Post
          </button>
          <button className="border border-red-600 p-3" onClick={logoutUser}>
            Sign Out
          </button>
        </div>
        <p>
          {user && user.user.username} - {user && user.user._id}
        </p>
      </nav>
      <DialogGeneric />
    </>
  );
};

export default Navbar;
