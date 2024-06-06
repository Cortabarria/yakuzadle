import React, { useState, useEffect } from "react";
import ConfettiComponent from "./congratulations/ConfettiComponent";
import "../assets/fonts/fonts.css"

function ConfettiWin() {
  const [runConfetti, setRunConfetti] = useState(false);

  useEffect(() => {
    setRunConfetti(true);
    const timer = setTimeout(() => setRunConfetti(false), 5000);
    return () => clearTimeout(timer); 
  }, []);

  return <ConfettiComponent runConfetti={runConfetti} />;
}

function RenderWinScreen({ renderFailedAttempts }) {
  return (
    <div>
      <div id="winner" class="winner myriad-text">Congratulations!</div>
      {ConfettiWin()}
      {renderFailedAttempts()}
    </div>
  );
}

export default RenderWinScreen;
