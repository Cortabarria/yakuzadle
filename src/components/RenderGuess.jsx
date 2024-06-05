import React from "react";

function RenderGuess({
  state,
  handleInputChange,
  checkAnswer,
  peopleList,
  renderFailedAttempts,
}) {
  return (
    <div>
      <div id="problem">Guess the character:</div>
      <input
        type="text"
        list="peopleList"
        value={state.inputText}
        onChange={handleInputChange}
        autoFocus
      />
      <datalist id="peopleList">
        {peopleList.map((person, index) => (
          <option key={index} value={person.name} />
        ))}
      </datalist>
      <button onClick={checkAnswer} disabled={!state.isValidSelection}>
        Submit
      </button>
      <div>Score: {state.score}</div>
      {renderFailedAttempts()}
    </div>
  );
}

export default RenderGuess;
