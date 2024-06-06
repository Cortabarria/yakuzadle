import React from "react";

function TableHeaders() {
  return (
    <div className="boxy container-outer">
      <div className="failed-attempt groupGuessesAnswersRow background-header-square">
        <p className="squearanswer" style={{ fontSize: "1.5 vh" }}>
          Name
        </p>
        <p className="attribute squearanswer">Sex</p>
        <p className="attribute squearanswer">Affiliation</p>
        <p className="attribute squearanswer">Hair color</p>
        <p className="attribute squearanswer">Height</p>
        <p className="attribute squearanswer">Year of Birth</p>
        <p className="attribute squearanswer">First game appearance</p>
        <p className="attribute squearanswer">Last game appearance</p>
        <p className="attribute squearanswer">Karaoke</p>
      </div>
    </div>
  );
}

export default TableHeaders;
