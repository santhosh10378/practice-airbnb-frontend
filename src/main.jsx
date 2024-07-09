import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ReduxProvider from "./providers/ReduxProvider.jsx";
import ToasterProvider from "./providers/ToasterProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ReduxProvider>
      <ToasterProvider />
      <App />
    </ReduxProvider>
  </React.StrictMode>
);
