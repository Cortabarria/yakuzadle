import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
//import { faCircleQuestion } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "react-tooltip";

function TableHeaders() {
  return (
    <div className="boxy container-outer">
      <div className="failed-attempt groupGuessesAnswersRow background-header-square">
        <p className="squareheader" style={{ fontSize: "1.5 vh" }}>
          Name
        </p>
        <p className="squareheader">Sex</p>
        <p className="squareheader">Hair color</p>
        <p className="squareheader">Affiliation</p>
        <p className="squareheader">Occupation</p>
        <p className="squareheader">First game appearance</p>
        <p className="squareheader">Last game appearance</p>
        <p className="squareheader">Involvement</p>
        <p className="squareheader">
          Karaoke&nbsp;
          <a
            data-tooltip-id="guide"
            data-tooltip-content="The character sings a karaoke song or appears in a video"
            data-tooltip-place="left"
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
