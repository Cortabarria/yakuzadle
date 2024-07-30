import React, { memo } from "react";
import TableHeaders from "./TableHeaders";
import "../../styles/FailedAttempts.css";

import getBackgroundImage from "../guessInformation/ImageBringer";
import { arraysEqual, vhToPx } from "../../utils/utilFunction";
import { Textfit } from "react-textfit";

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

          // Check if occupation match
          const fullMatchOcc = arraysEqual(
            person.occupation,
            randomCharacter.occupation
          );
          const partialMatchOcc = person.occupation.some((occ) =>
            randomCharacter.occupation.includes(occ)
          );

          let occupationClass = "";
          if (fullMatchOcc) {
            occupationClass = "correct";
          } else if (partialMatchOcc) {
            occupationClass = "partial-match";
          } else {
            occupationClass = "incorrect";
          }

          // Check if Involvement match
          const fullMatchInv = arraysEqual(
            person.involvement,
            randomCharacter.involvement
          );
          const partialMatchInv = person.involvement.some((inv) =>
            randomCharacter.involvement.includes(inv)
          );

          let involvementClass = "";
          if (fullMatchInv) {
            involvementClass = "correct";
          } else if (partialMatchInv) {
            involvementClass = "partial-match";
          } else {
            involvementClass = "incorrect";
          }

          return (
            <div className="boxy container-outer" key={index}>
              <div className="failed-attempt groupGuessesAnswersRow">
                <div
                  className="imgsqr squareanswer image-container"
                  style={{
                    fontSize: "1.5vh",
                    backgroundImage: `url("${getBackgroundImage(person)}")`,

                    // backgroundImage: `url('images/charactersPortraits/rgg.png')`,
                  }}
                >
                  <span className="hover-text">{person.name}</span>
                </div>

                <div
                  className={`attribute ${
                    person.sex === randomCharacter.sex ? "correct" : "incorrect"
                  } squareanswer`}
                >
                  {person.sex}
                </div>

                <div className={`attribute ${hairClass} squareanswer`}>
                  {person.hair.join(" / ")}
                </div>

                <Textfit
                  className={`attribute ${affiliationClass} squareanswer`}
                  mode="multi"
                  min={10}
                  max={12}
                >
                  {person.affiliation.join(" / ")}
                </Textfit>

                <Textfit
                  className={`attribute ${occupationClass} squareanswer`}
                  mode="multi"
                  min={10}
                  max={14}
                >
                  {person.occupation.join(" / ")}
                </Textfit>

                <div
                  className={`attribute ${
                    person.first_game_appearance ===
                    randomCharacter.first_game_appearance
                      ? "correct"
                      : "incorrect"
                  } squareanswer`}
                >
                  {person.first_game_appearance}
                </div>

                <div
                  className={`attribute ${
                    person.last_game_appearance ===
                    randomCharacter.last_game_appearance
                      ? "correct"
                      : "incorrect"
                  } squareanswer`}
                  // style={{ wordBreak: "break-all" }}
                >
                  {person.last_game_appearance}
                </div>

                <Textfit
                  className={`attribute ${involvementClass} squareanswer`}
                  mode="multi"
                  min={5}
                  max={14}
                >
                  {person.involvement.join(" / ")}
                </Textfit>
                
                <div
                  className={`attribute ${
                    person.karaoke === randomCharacter.karaoke
                      ? "correct"
                      : "incorrect"
                  } squareanswer`}
                >
                  {person.karaoke}
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
});


export default FailedAttempts;
