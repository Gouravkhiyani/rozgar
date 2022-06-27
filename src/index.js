import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import LoginSignup from "./LoginSignup";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <LoginSignup />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);