// FailedAttempts.jsx
import React from "react";
import "../TableHeaders";

function LoseFailedInformation({ randomCharacter }) {
  return (
    <div className="boxy container-outer">
      <div className="failed-attempt groupGuessesAnswersRow">
        <p className="failed squearanswer" style={{ fontSize: "1.5 vh" }}>
          {randomCharacter.name}
        </p>
        <p className="failed squearanswer">{randomCharacter.sex}</p>

        <p className="failed squearanswer">{randomCharacter.affiliation}</p>

        <p className="failed squearanswer">{randomCharacter.hair}</p>

        <p className="failed squearanswer">{randomCharacter.height}</p>

        <p className="failed squearanswer">{randomCharacter.dob}</p>

        <p className="failed squearanswer">
          {randomCharacter.first_game_appearance}
        </p>

        <p className="failed squearanswer">
          {randomCharacter.last_game_appearance}
        </p>

        <p className="failed squearanswer">{randomCharacter.karaoke}</p>
      </div>
    </div>
  );
}

export default LoseFailedInformation;
