import React, { useState, useEffect } from "react";
import ConfettiComponent from "./congratulations/ConfettiComponent";
import "../assets/fonts/fonts.css";
import ResultInformation from "./inprocess/ResultInformation";

function ConfettiWin() {
  const [runConfetti, setRunConfetti] = useState(false);

  useEffect(() => {
    setRunConfetti(true);
    const timer = setTimeout(() => setRunConfetti(false), 5000);
    return () => clearTimeout(timer);
  }, []);

  return <ConfettiComponent runConfetti={runConfetti} />;
}

function RenderWinScreen({ renderFailedAttempts, randomCharacter }) {
  return (
    <div>
      <div id="winner" className="winner myriad-text">
        Congratulations!
        {ConfettiWin()}
        <ResultInformation randomCharacter={randomCharacter} />
      </div>
      {renderFailedAttempts()}
    </div>
  );
}

export default RenderWinScreen;
