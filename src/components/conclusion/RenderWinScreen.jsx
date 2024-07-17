import React, { useState, useEffect } from "react";
import ConfettiComponent from "../congratulations/ConfettiComponent";
import "../../assets/fonts/fonts.css";
import ResultInformation from "./ResultInformation";
import FailedAttempts from "../guessCharacterRandom/FailedAttempts";

function ConfettiWin() {
  const [runConfetti, setRunConfetti] = useState(false);

  useEffect(() => {
    setRunConfetti(true);
    const timer = setTimeout(() => setRunConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return <ConfettiComponent runConfetti={runConfetti} />;
}

function RenderWinScreen({   
  failedAttempts, randomCharacter }) {
  return (
    <div>
      <div id="winner" className="winner myriad-text ">
        {ConfettiWin()}
        <h1>Congratulations!</h1>
        <ResultInformation randomCharacter={randomCharacter} />
      </div>
      <FailedAttempts
        failedAttempts={failedAttempts}
        randomCharacter={randomCharacter}
      />
    </div>
  );
}

export default RenderWinScreen;
