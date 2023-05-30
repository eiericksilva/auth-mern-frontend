import { useState, createContext } from "react";

const DialogContext = createContext();

const DialogProvider = ({ children }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleOpenModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  return (
    <DialogContext.Provider
      value={{ modalIsOpen, setModalIsOpen, handleOpenModal }}
    >
      {children}
    </DialogContext.Provider>
  );
};

export { DialogProvider, DialogContext };
