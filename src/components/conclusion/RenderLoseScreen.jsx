import React, { useState, useEffect } from "react";
import "../../assets/fonts/fonts.css";
import ResultInformation from "./ResultInformation";
import LoseFailedInformation from "./LoseFailedInformation";
import FailedAttempts from "../guessCharacterRandom/FailedAttempts";

function RenderLoseScreen({ renderFailedAttempts, randomCharacter }) {
  return (
    <div>
      <div class="result">
        <div id="winner" class="winner myriad-text">
          Womp Womp!
          <ResultInformation randomCharacter={randomCharacter} />
        </div>

          <LoseFailedInformation randomCharacter={randomCharacter} />
          
      </div>
      {renderFailedAttempts()}
    </div>
  );
}

export default RenderLoseScreen;
