import React from "react";

function RenderWinScreen({ renderFailedAttempts }) {
  return (
    <div>
      <div id="winner">You won!</div>
      {renderFailedAttempts()}
    </div>
  );
}

export default RenderWinScreen;
