// ResultInformation.jsx
import React, { useState, useEffect } from "react";
import AnimatedImage from "../animation/AnimatedImage.js";
import getBackgroundImage from "../guessInformation/ImageBringer.jsx";
import ConfettiComponent from "../congratulations/ConfettiComponent";
import FailedAttempts from "../guessCharacterRandom/FailedAttempts";
import "../../assets/fonts/fonts.css";

import LoseFailedInformation from "./LoseFailedInformation";
import Button from "@mui/material/Button";

function ConfettiWin() {
  const [runConfetti, setRunConfetti] = useState(false);

  useEffect(() => {
    setRunConfetti(true);
    const timer = setTimeout(() => setRunConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return <ConfettiComponent runConfetti={runConfetti} />;
}

function ResultInformation({ randomCharacter, failedAttempts, isWinner }) {
  return (
    <div className="result">
      <div id="winner" className="winner myriad-text removeLater">
        {isWinner ? ConfettiWin() : null}
        <h1>{isWinner ? "Congratulations!" : "Womp Womp!"}</h1>
        <div className="squareInfo removeLater">
          <h2>{randomCharacter.name}</h2>
          <AnimatedImage
            src={getBackgroundImage(randomCharacter)}
            alt={`Image of ${randomCharacter.name}`}
          />
        </div>
      </div>

      {/* <div>
        <Button variant="contained">Share!</Button>
      </div> */}

      <div>
        {isWinner ? (
          ""
        ) : (
          <LoseFailedInformation randomCharacter={randomCharacter} />
        )}
      </div>
      <FailedAttempts
        failedAttempts={failedAttempts}
        randomCharacter={randomCharacter}
      />
    </div>
  );
}

export default ResultInformation;
