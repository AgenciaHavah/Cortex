import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "./styles.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import DataProvider from "./contexts/DataContext";
import DeviceProvider from "./contexts/DeviceContext";
import ModalProvider from "./contexts/ModalContext";

ReactDOM.render(
  <DataProvider>
    <DeviceProvider>
      <ModalProvider>
        <App />
        <ToastContainer />
      </ModalProvider>
    </DeviceProvider>
  </DataProvider>,
  document.getElementById("root")
);
