import React from "react";
import TableHeaders from "./TableHeaders";

function FailedAttempts({ state, randomCharacter }) {
  if (state.failedAttempts.length === 0) {
    return null;
  }

  return (
    <div className="failed-attempts" id="failedAttempts">
      <TableHeaders />
      {state.failedAttempts
        .slice()
        .reverse()
        .map((person, index) => {
          let dobClass = "";
          let higClass = "";

          if (person.dob > randomCharacter.dob) {
            dobClass = "higher-dob";
          } else if (person.dob < randomCharacter.dob) {
            dobClass = "lower-dob";
          } else {
            dobClass = "same-dob-green";
          }

          if (person.height > randomCharacter.height) {
            higClass = "higher-dob";
          } else if (person.height < randomCharacter.height) {
            higClass = "lower-dob";
          } else {
            higClass = "same-dob-green";
          }

          return (
            <div className="boxy container-outer" key={index}>
              <div className="failed-attempt groupGuessesAnswersRow">
                <p className="squearanswer" style={{ fontSize: "1.5 vh" }}>
                  {person.name}
                </p>
                <p
                  className={`attribute ${
                    person.sex === randomCharacter.sex ? "correct" : "incorrect"
                  } squearanswer`}
                >
                  {person.sex}
                </p>
                <p
                  className={`attribute ${
                    person.affiliation === randomCharacter.affiliation
                      ? "correct"
                      : "incorrect"
                  } squearanswer`}
                >
                  {person.affiliation}
                </p>
                <p
                  className={`attribute ${
                    person.hair === randomCharacter.hair
                      ? "correct"
                      : "incorrect"
                  } squearanswer`}
                >
                  {person.hair}
                </p>
                <p
                  className={`attribute ${
                    person.eye === randomCharacter.eye ? "correct" : "incorrect"
                  } squearanswer`}
                >
                  {person.eye}
                </p>
                <p className={`attribute ${higClass} squearanswer`}>
                  {person.height}
                </p>
                <p className={`attribute ${dobClass} squearanswer`}>
                  {person.dob}
                </p>
                <p
                  className={`attribute ${
                    person.first_game_appearance ===
                    randomCharacter.first_game_appearance
                      ? "correct"
                      : "incorrect"
                  } squearanswer`}
                >
                  {person.first_game_appearance}
                </p>
                <p
                  className={`attribute ${
                    person.karaoke === randomCharacter.karaoke
                      ? "correct"
                      : "incorrect"
                  } squearanswer`}
                >
                  {person.karaoke}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
}

export default FailedAttempts;
