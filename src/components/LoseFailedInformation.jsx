// FailedAttempts.jsx
import React from "react";
import "./guessCharacterRandom/TableHeaders";
import TableHeaders from "./guessCharacterRandom/TableHeaders";

function LoseFailedInformation({ randomCharacter }) {
  return (
    <div className={`failed-attempts reveal`} id="failedAttempts">
      <TableHeaders />
      <div className="boxy container-outer">
        <div className="failed-attempt groupGuessesAnswersRow">
          <p
            className="imgsqr squareanswer image-container"
            style={{
              fontSize: "1.5vh",
              backgroundImage: "url('images/charactersPortraits/kazzy.png')",
            }}
          >
            <span className="hover-text">{randomCharacter.name}</span>
          </p>

          <p className="failed squareanswer">{randomCharacter.sex}</p>

          <p className="failed squareanswer">
            {randomCharacter.affiliation.join(" / ")}
          </p>

          <p className="failed squareanswer">{randomCharacter.hair}</p>

          <p className="failed squareanswer">{randomCharacter.height}</p>

          <p className="failed squareanswer">{randomCharacter.dob}</p>

          <p className="failed squareanswer">
            {randomCharacter.first_game_appearance}
          </p>

          <p className="failed squareanswer">
            {randomCharacter.last_game_appearance}
          </p>

          <p className="failed squareanswer">{randomCharacter.karaoke}</p>
        </div>
      </div>
    </div>
  );
}

export default LoseFailedInformation;
