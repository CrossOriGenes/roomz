import { createRoot } from "react-dom/client";
import { ToastContainer, Zoom } from "react-toastify";
import "./assets/styles/index.css";
import "./assets/styles/main.css";
import "./assets/styles/vendors.css";

import App from "./App.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <App />
    <ToastContainer
      position="bottom-left"
      autoClose={15000}
      hideProgressBar
      draggable
      closeOnClick
      pauseOnHover
      theme="light"
      transition={Zoom}
    />
  </AuthContextProvider>
);
