import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import { HashRouter  as Router } from "react-router-dom";
import { ResultContextProvider } from "./contexts/ResultContextProvider";
import "./global.css";
ReactDom.render(
    <ResultContextProvider>
  <Router>
    <App />
  </Router>
    </ResultContextProvider>,


  document.getElementById("root")
);
