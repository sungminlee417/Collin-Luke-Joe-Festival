import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { ModalProvider } from "./context/Modal";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ModalProvider>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </ModalProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
