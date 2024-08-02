// ConclusionComponent.jsx
import React from "react";
import ResultInformation from "./ResultInformation";

function ConclusionComponent({ gameOutcome, randomCharacter, failedAttempts, daily }) {
  return (
    <div>
      <ResultInformation
        isWinner={gameOutcome === "win"}
        randomCharacter={randomCharacter}
        failedAttempts={failedAttempts}
        daily={daily}
      />
    </div>
  );
}

export default ConclusionComponent;
