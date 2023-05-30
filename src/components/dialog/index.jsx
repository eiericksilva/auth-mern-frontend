import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useContext } from "react";
import { DialogContext } from "../../context/ModalContext";
import CreatePostForm from "../createPostForm";

export default function DialogGeneric() {
  const { modalIsOpen, handleOpenModal } = useContext(DialogContext);

  return (
    <Dialog fullWidth open={modalIsOpen} onClose={handleOpenModal}>
      <DialogTitle>Create a new Post</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter your post details and click register to save the news
        </DialogContentText>
        <CreatePostForm />
      </DialogContent>
    </Dialog>
  );
}
