import React, { useState } from "react";
import "../styles/input.css";
import { Button } from "react-bootstrap";

function RenderGuess({
  state,
  handleInputChange,
  checkAnswer,
  peopleList,
  renderFailedAttempts,
}) {
  const [showList, setShowList] = useState(false);

  /*
  const filterPeopleList = () => {
    const { inputText } = state;
    const filteredList = peopleList.filter((person) => {
      const name = person.name.toLowerCase();
      const input = inputText.toLowerCase();
      return (
        name.startsWith(input) ||
        (name.includes(" ") && name.split(" ")[1].startsWith(input))
      );
    });
    return filteredList;
  };
*/
  
  // Returns only people that have a name (this include first name, any name after a space or "(" ) that starts with what you are typing
  const filterPeopleList = () => {
    const { inputText } = state;
    const filteredList = peopleList.filter((person) => {
      const name = person.name.toLowerCase();
      const input = inputText.toLowerCase();

      const inputParts = input
        .split(/\s+/)
        .filter((part) => part.trim() !== ""); // Split input text by spaces
      const nameParts = name.match(/\(|\)|[^\s()]+/g);

      let inputIndex = 0;
      for (let i = 0; i < nameParts.length; i++) {
        if (nameParts[i].startsWith(inputParts[inputIndex])) {
          inputIndex++;
          if (inputIndex === inputParts.length) {
            return true;
          }
        }
      }
    });
    return filteredList;
  };

  const handleInputFocus = () => {
    setShowList(true);
  };

  const handleInputBlur = () => {
    setShowList(false);
  };

  return (
    <div className="change">
      <div className="inputContainer">
        <input
          className="guessInput myriad-text layoutInput"
          type="text"
          list={state.inputText ? "peopleList" : undefined} 
          value={state.inputText}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          autoFocus
          placeholder="🐲 Write the character's name 🐲"
        />
        {showList &&
          state.inputText && ( 
            <datalist id="peopleList">
              {filterPeopleList().map((person, index) => (
                <option key={index} value={person.name} />
              ))}
            </datalist>
          )}
        <Button
          variant="primary"
          onClick={checkAnswer}
          disabled={!state.isValidSelection}
        >
          Guess!
        </Button>
        <div>Score: {state.score}</div>
      </div>
      {renderFailedAttempts()}
    </div>
  );
}

export default RenderGuess;
