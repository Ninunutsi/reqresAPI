import React from "react";
import ReactDOM from "react-dom/client";
import { GlobalStyle } from "./config";
import { AppRoutes } from "./views";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <AppRoutes />
  </React.StrictMode>
);
