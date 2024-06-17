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
        <p className="squearanswer" style={{ fontSize: "1.5 vh" }}>
          Name
        </p>
        <p className="attribute squearanswer">Sex</p>
        <p className="attribute squearanswer">Affiliation</p>
        <p className="attribute squearanswer">Hair color</p>
        <p className="attribute squearanswer">Height</p>
        <p className="attribute squearanswer">Year of birth</p>
        <p className="attribute squearanswer">First game appearance</p>
        <p className="attribute squearanswer">Last game appearance</p>
        <p className="attribute squearanswer">
          Karaoke
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
