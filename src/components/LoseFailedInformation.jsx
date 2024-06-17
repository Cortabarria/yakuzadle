// FailedAttempts.jsx
import React from "react";
import "./guessCharacterRandom/TableHeaders";

function LoseFailedInformation({ randomCharacter }) {
  return (
    <div className="boxy container-outer">
      <div className="failed-attempt groupGuessesAnswersRow">
        <p className="failed squareanswer" style={{ fontSize: "1.5 vh" }}>
          {randomCharacter.name}
        </p>
        <p className="failed squareanswer">{randomCharacter.sex}</p>

        <p className="failed squareanswer">{randomCharacter.affiliation}</p>

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
  );
}

export default LoseFailedInformation;
