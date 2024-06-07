import React, { useState, useEffect } from "react";
import "../assets/fonts/fonts.css";
import ResultInformation from "./inprocess/ResultInformation";
import LoseFailedInformation from "./test/LoseFailedInformation";

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
