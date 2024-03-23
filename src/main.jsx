import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "../redux/store.js";
import { ThemeProvider } from "@material-tailwind/react";
import { HelmetProvider } from "react-helmet-async";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <HelmetProvider>
          <App />
          <ToastContainer />
        </HelmetProvider>
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
