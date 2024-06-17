import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
//import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "react-tooltip";

function TableHeaders() {
  return (
    <div className="boxy container-outer">
      <i class="fa-regular fa-circle-question"></i>
      <div className="failed-attempt groupGuessesAnswersRow background-header-square">
        <p className="squareanswer" style={{ fontSize: "1.5 vh" }}>
          Name
        </p>
        <p className="attribute squareanswer">Sex</p>
        <p className="attribute squareanswer">Affiliation</p>
        <p className="attribute squareanswer">Hair color</p>
        <p className="attribute squareanswer">Height</p>
        <p className="attribute squareanswer">Year of birth</p>
        <p className="attribute squareanswer">First game appearance</p>
        <p className="attribute squareanswer">Last game appearance</p>
        <p className="attribute squareanswer">
          Karaoke&nbsp;
          <a
            data-tooltip-id="guide"
            data-tooltip-content="The character sings a karaoke song or appears in a video"
          >
            <FontAwesomeIcon icon={faCircleQuestion} />
          </a>
          <Tooltip id="guide" />
        </p>
      </div>
    </div>
  );
}

export default TableHeaders;
