// FailedAttempts.jsx
import React from "react";
import TableHeaders from "./TableHeaders";

function FailedAttempts({ state, randomCharacter, score }) {
  if (state.failedAttempts.length === 0) {
    return null;
  }

  return (
    <div
      className={`failed-attempts ${score === -5 ? "dark-blue" : ""}`}
      id="failedAttempts"
    >
      <TableHeaders />
      {state.failedAttempts
        .slice()
        .reverse()
        .map((person, index) => {
          let dobClass = "";
          let higClass = "";

          // Year
          if (randomCharacter.dob === person.dob) {
            dobClass = "same-dob-green";
          } else {
            if (randomCharacter.dob !== "?" && person.dob !== "?") {
              if (person.dob > randomCharacter.dob) {
                dobClass = "higher-dob";
              } else if (person.dob < randomCharacter.dob) {
                dobClass = "lower-dob";
              }
            } else {
              dobClass = "incorrect";
            }
          }

          // Height
          if (person.height === randomCharacter.height) {
            higClass = "same-dob-green";
          } else {
            if (randomCharacter.height !== "?" && person.height !== "?") {
              if (person.height > randomCharacter.height) {
                higClass = "higher-dob";
              } else if (person.height < randomCharacter.height) {
                higClass = "lower-dob";
              }
            } else {
              higClass = "incorrect";
            }
          }

          // Check if affiliations match
          const fullMatch =
            JSON.stringify(person.affiliation) ===
            JSON.stringify(randomCharacter.affiliation);
          const partialMatch = person.affiliation.some((aff) =>
            randomCharacter.affiliation.includes(aff)
          );

          let affiliationClass = "";
          if (fullMatch) {
            affiliationClass = "correct";
          } else if (partialMatch) {
            affiliationClass = "partial-match";
          } else {
            affiliationClass = "incorrect";
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
                <p className={`attribute ${affiliationClass} squearanswer`}>
                  {person.affiliation.join(" / ")}
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
                    person.last_game_appearance ===
                    randomCharacter.last_game_appearance
                      ? "correct"
                      : "incorrect"
                  } squearanswer`}
                  style={{ wordBreak: "break-all" }}
                >
                  {person.last_game_appearance}
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
