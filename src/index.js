import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";
import customTheme from "./utils/theme";
import { ChakraProvider } from "@chakra-ui/react";
import AuthcontextProvider from "./AuthhContext/AuthContext";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <AuthcontextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </AuthcontextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
