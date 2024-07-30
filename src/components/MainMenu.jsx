import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import AppR from "../components/guessCharacterRandom/AppR";
import AppIR from "./guessIrezumiRandom/WIP-AppIR";

// import MainComponent from "./tests/MainComponent";

import "../styles/mainmenu.css";

import { getTodayCharacter } from "../utils/utilFunction";
import { ReturnCharactersJSON } from "../utils/returnCharactersJSON";


function MainMenu() {
  const location = useLocation();
  const list = ReturnCharactersJSON();
  const char = getTodayCharacter(list);

  if (
    location.pathname === "/random" ||
    location.pathname === "/daily" ||
    location.pathname === "/test"
  ) {
    // Only render the component for the route
    return (
      <Routes>
        <Route path="/random" element={<AppR />} />
        <Route path="/daily" element={<AppR charac={char} />} />

        {/* <Route path="/irezumi" element={<AppIR />} />
        <Route path="/test" element={<MainComponent />} /> */}
      </Routes>
    );
  }

  return (
    <div>
      <div className="containerMM">
        <>
          <div className="button-mode">
            <img
              src={`${process.env.PUBLIC_URL}/button.png`}
              width="100%"
              className="button-img"
              alt="button"
            />
            <Link to="/daily" className="link">
              <div className="button-content">
                <div className="button-title">Daily Character</div>
                <div className="button-description">Guess the daily character!</div>
              </div>
            </Link>
          </div>


          <div className="button-mode">
            <img
              src={`${process.env.PUBLIC_URL}/button.png`}
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


          {/* <div className="button-mode">
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
          </div> */}

          {/* <div className="button-mode">
            <img
              src="button.png"
              width="100%"
              className="button-img"
              alt="button"
            />
            <Link to="/test" className="link">
              <div className="button-content">
                <div className="button-title">TEST</div>
                <div className="button-description">For testing</div>
              </div>
            </Link>
          </div> */}
        </>
      </div>
    </div>
  );
}

export default MainMenu;
