import React, { memo } from "react";
import TableHeaders from "./TableHeaders";
import "../../styles/FailedAttempts.css";

import getBackgroundImage from "../guessInformation/ImageBringer";
import { arraysEqual } from "../../utils/utilFunction";

const FailedAttempts = memo(({ failedAttempts, randomCharacter}) => {
  if (failedAttempts.length === 0) {
    return null;
  }

  return (
    <div className={`failed-attempts`} id="failedAttempts">
      <TableHeaders />
      {failedAttempts
        .slice()
        .reverse()
        .map((person, index) => {



          let dobClass = "";
          let higClass = "";

          // Year
          if (person.dob.length === 0) {
            dobClass = "incorrect";
          } else {
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
          }

          // Height
          if (person.height.length === 0) {
            higClass = "incorrect";
          } else {
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
          }

          // Check if affiliations match
          const fullMatch = arraysEqual(
            person.affiliation,
            randomCharacter.affiliation
          );
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

          // Check if hair match
          const fullMatchHair = arraysEqual(person.hair, randomCharacter.hair);
          const partialMatchHair = person.hair.some((har) =>
            randomCharacter.hair.includes(har)
          );

          let hairClass = "";
          if (fullMatchHair) {
            hairClass = "correct";
          } else if (partialMatchHair) {
            hairClass = "partial-match";
          } else {
            hairClass = "incorrect";
          }

          return (
            <div className="boxy container-outer" key={index}>
              <div className="failed-attempt groupGuessesAnswersRow">
                <p
                  className="imgsqr squareanswer image-container"
                  style={{
                    fontSize: "1.5vh",
                    backgroundImage: `url("${getBackgroundImage(person)}")`,

                    // backgroundImage: `url('images/charactersPortraits/rgg.png')`,
                  }}
                >
                  <span className="hover-text">{person.name}</span>
                </p>

                <p
                  className={`attribute ${
                    person.sex === randomCharacter.sex ? "correct" : "incorrect"
                  } squareanswer`}
                >
                  {person.sex}
                </p>
                <p className={`attribute ${affiliationClass} squareanswer`}>
                  {person.affiliation.join(" / ")}
                </p>

                {/* <p
                  className={`attribute ${
                    person.hair == randomCharacter.hair
                      ? "correct"
                      : "incorrect"
                  } squareanswer`}
                >
                  {person.hair.join(" / ")}
                </p> */}

                <p className={`attribute ${hairClass} squareanswer`}>
                  {person.hair.join(" / ")}
                </p>

                <p className={`attribute ${higClass} squareanswer`}>
                  {person.height}
                </p>
                <p className={`attribute ${dobClass} squareanswer`}>
                  {person.dob}
                </p>
                <p
                  className={`attribute ${
                    person.first_game_appearance ===
                    randomCharacter.first_game_appearance
                      ? "correct"
                      : "incorrect"
                  } squareanswer`}
                >
                  {person.first_game_appearance}
                </p>

                <p
                  className={`attribute ${
                    person.last_game_appearance ===
                    randomCharacter.last_game_appearance
                      ? "correct"
                      : "incorrect"
                  } squareanswer`}
                  // style={{ wordBreak: "break-all" }}
                >
                  {person.last_game_appearance}
                </p>

                <p
                  className={`attribute ${
                    person.karaoke === randomCharacter.karaoke
                      ? "correct"
                      : "incorrect"
                  } squareanswer`}
                >
                  {person.karaoke}
                </p>
              </div>
            </div>
          );
        })}
    </div>
  );
});


export default FailedAttempts;
