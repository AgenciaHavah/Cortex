import { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  const [modalData, setModalData] = useState({ show: false, data: null });

  const providerValue = {
    modalData,
    setModalData,
  };

  return (
    <ModalContext.Provider value={providerValue}>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
