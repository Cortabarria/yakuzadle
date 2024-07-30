// FailedAttempts.jsx
import React from "react";
import "../guessCharacterRandom/TableHeaders";
import TableHeaders from "../guessCharacterRandom/TableHeaders";
import getBackgroundImage from "../guessInformation/ImageBringer.jsx";

import { Textfit } from "react-textfit";


function LoseFailedInformation({ randomCharacter }) {
  return (
    <div className={`failed-attempts reveal`} id="failedAttempts">
      <TableHeaders />
      <div className="boxy container-outer">
        <div className="failed-attempt groupGuessesAnswersRow">
          <div
            className="imgsqr squareanswer image-container"
            style={{
              fontSize: "1.5vh",
              backgroundImage: `url("${getBackgroundImage(randomCharacter)}")`,

              // backgroundImage: `url('images/charactersPortraits/rgg.png')`,
            }}
          >
            <span className="hover-text">{randomCharacter.name}</span>
          </div>

          <div className={`attribute failed squareanswer`}>
            {randomCharacter.sex}
          </div>

          <div className={`attribute failed squareanswer`}>
            {randomCharacter.hair.join(" / ")}
          </div>

          <Textfit
            className={`attribute failed squareanswer`}
            mode="multi"
            min={10}
            max={12}
          >
            {randomCharacter.affiliation.join(" / ")}
          </Textfit>

          <Textfit
            className={`attribute failed squareanswer`}
            mode="multi"
            min={10}
            max={14}
          >
            {randomCharacter.occupation.join(" / ")}
          </Textfit>

          <div className={`attribute failed squareanswer`}>
            {randomCharacter.first_game_appearance}
          </div>

          <div className={`attribute failed squareanswer`}>
            {randomCharacter.last_game_appearance}
          </div>

          <Textfit
            className={`attribute failed squareanswer`}
            mode="multi"
            min={5}
            max={14}
          >
            {randomCharacter.involvement.join(" / ")}
          </Textfit>

          <div className={`attribute failed squareanswer`}>
            {randomCharacter.karaoke}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoseFailedInformation;
