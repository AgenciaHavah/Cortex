import React, { useContext } from "react";
import classNames from "classnames";

import { ModalContext } from "../../config/contexts/ModalContext";

import Form from "./Form";

const Modal = () => {
  const { isModalOpen, setIsModalOpen } = useContext(ModalContext);

  const cs = {
    modal: isModalOpen ? "block" : "hidden",
  };

  return (
    <div className={`${cs.modal} fixed pin z-20 inset-0`}>
      <div className="overflow-hidden flex items-end justify-center h-full max-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <div className="h-full">
          <div
            className="fixed inset-0 transition-opacity"
            onClick={() => setIsModalOpen(false)}
            aria-hidden="true"
          >
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div
            className="inline-block align-bottom bg-white rounded-md text-left transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-headline"
          >
            <div className="rounded-md bg-white shadow-xl px-4 pt-5 pb-4 sm:p-6 sm:pb-4 max-h-screen overflow-auto">
              <p className="mb-3 text-xl leading-8 font-extrabold tracking-tight sm:text-2xl text-center">
                Entre em contato
              </p>
              <Form
                controlId="modal"
                onSubmit={() => setIsModalOpen(false)}
                onDismiss={() => setIsModalOpen(false)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
