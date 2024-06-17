import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

import AppR from "./components/guessCharacterRandom/AppR";
import Header from "./components/Header";
import MainMenu from "./components/MainMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div
      style={{
        backgroundImage: "url(images/assets/background.png)",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        height: "100vh",
        overflow: "auto",
      }}
    >
      <BrowserRouter>
        <Header />
        <MainMenu />
      </BrowserRouter>
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
