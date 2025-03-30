// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import "./assets/styles/index.css";
import "./assets/styles/main.css";
import "./assets/styles/vendors.css";

import App from "./App.jsx";
import AuthContextProvider from "./context/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <Toaster
      position="bottom-left"
      toastOptions={{
        duration: 15000,
        success: { className: "success-toast__styles" },
        error: { className: "error-toast__styles" },
      }}
    />
    <App />
  </AuthContextProvider>
);
