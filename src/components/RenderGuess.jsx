import React from "react";
import "../styles/input.css"

function RenderGuess({
  state,
  handleInputChange,
  checkAnswer,
  peopleList,
  renderFailedAttempts,
}) {
  return (
    <div>
      <div class="inputContainer">
        <input
          class="guessInput myriad-text layoutInput"
          type="text"
          list="peopleList"
          value={state.inputText}
          onChange={handleInputChange}
          autoFocus
          placeholder="🐲 Write the character's name 🐲"
        />
        <datalist id="peopleList">
          {peopleList.map((person, index) => (
            <option key={index} value={person.name} />
          ))}
        </datalist>
        <button onClick={checkAnswer} disabled={!state.isValidSelection}>
          Guess!
        </button>
        <div>Score: {state.score}</div>
      </div>
      {renderFailedAttempts()}
    </div>
  );
}

export default RenderGuess;
