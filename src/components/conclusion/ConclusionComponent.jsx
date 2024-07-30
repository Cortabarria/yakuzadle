// ConclusionComponent.jsx
import React from "react";
import ResultInformation from "./ResultInformation";

function ConclusionComponent({ gameOutcome, randomCharacter, failedAttempts }) {
  return (
    <div>
      <ResultInformation
        isWinner={gameOutcome === "win"}
        randomCharacter={randomCharacter}
        failedAttempts={failedAttempts}
      />
    </div>
  );
}

export default ConclusionComponent;
