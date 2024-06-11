import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import AppR from "../components/guessCharacterRandom/AppR";
import AppIR from "./guessIrezumiRandom/WIP-AppIR";
import "../styles/mainmenu.css";

function MainMenu() {
  const location = useLocation();

  if (location.pathname === "/random" || location.pathname === "/irezumi") {
    // Only render the component for the route
    return (
      <Routes>
        <Route path="/random" element={<AppR />} />
        <Route path="/irezumi" element={<AppIR />} />
      </Routes>
    );
  }

  return (
    <div>
      <div className="containerMM">
        <>
          <div className="button-mode">
            <img
              src="button.png"
              width="100%"
              className="button-img"
              alt="button"
            />
            <Link to="/random" className="link">
              <div className="button-content">
                <div className="button-title">Random Character</div>
                <div className="button-description">Guess the character!</div>
              </div>
            </Link>
          </div>

          <div className="button-mode">
            <img
              src="button.png"
              width="100%"
              className="button-img"
              alt="button"
            />
            <Link to="/irezumi" className="link">
              <div className="button-content">
                <div className="button-title">Irezumi (WIP)</div>
                <div className="button-description">Coming soon</div>
              </div>
            </Link>
          </div>
        </>
      </div>
    </div>
  );
}

export default MainMenu;
