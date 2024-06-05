import React, { useState } from "react";
import { MyComponent3 } from "./MyComponent";
import "./styles.css"; // Import the CSS file

const peopleList = MyComponent3();
const randomIndex = Math.floor(Math.random() * peopleList.length);
const randomCharacter = peopleList[randomIndex];
console.log(randomCharacter.name);

function AppR() {
  const [state, setState] = useState({
    inputText: "",
    selectedName: "",
    score: 0,
    incorrect: false,
    isValidSelection: false,
    failedAttempts: [],
  });

  function renderWinScreen() {
    return (
      <div>
        <div id="winner">You won!</div>
        {renderFailedAttempts()}
      </div>
    );
  }

  function handleInputChange(event) {
    const inputText = event.target.value;
    const isValidSelection = peopleList.some(
      (person) => person.name.toLowerCase() === inputText.toLowerCase()
    );
    setState({
      ...state,
      inputText,
      selectedName: inputText,
      isValidSelection,
    });
  }

  function checkAnswer() {
    const answer = state.selectedName;
    if (answer.toLowerCase() === randomCharacter.name.toLowerCase()) {
      // Correcto
      setState({
        ...state,
        score: 1,
        inputText: "",
        selectedName: "",
        incorrect: false,
        isValidSelection: false,
      });
    } else {
      // Incorrecto
      const selectedCharacter = peopleList.find(
        (person) => person.name.toLowerCase() === answer.toLowerCase()
      );
      setState({
        ...state,
        score: state.score - 1,
        inputText: "",
        selectedName: "",
        incorrect: true,
        isValidSelection: false,
        failedAttempts: selectedCharacter
          ? [...state.failedAttempts, selectedCharacter]
          : state.failedAttempts,
      });
    }
  }

function renderFailedAttempts() {
  if (state.failedAttempts.length === 0) {
    return null;
  }
  
  
  return (
    <div className="failed-attempts" id="failedAttempts">
      <h3>Failed Attempts:</h3>
      {state.failedAttempts.slice().reverse().map((person, index) => {
        let dobClass = '';
        let higClass = "";

        if ((person.dob) > (randomCharacter.dob)) {
          dobClass = "higher-dob";
        } else if ((person.dob) < (randomCharacter.dob)) {
          dobClass = "lower-dob";
        } else {
          dobClass = "same-dob-green";
        }

        if (person.height > randomCharacter.height) {
          higClass = "higher-dob";
        } else if (person.height < randomCharacter.height) {
          higClass = "lower-dob";
        } else {
          higClass = "same-dob-green";
        }
        
        return (
          <div className="boxy">
            <div className="failed-attempt" key={index}>
              <p>{person.name}</p>
              <p className={`attribute ${person.sex === randomCharacter.sex ? 'correct' : 'incorrect'}`}>{person.sex}</p>
              <p className={`attribute ${person.affiliation === randomCharacter.affiliation ? 'correct' : 'incorrect'}`}>{person.affiliation}</p>
              <p className={`attribute ${person.hair === randomCharacter.hair ? 'correct' : 'incorrect'}`}>{person.hair}</p>
              <p className={`attribute ${person.eye === randomCharacter.eye ? 'correct' : 'incorrect'}`}>{person.eye}</p>
              <p className={`attribute ${higClass}`}>{person.height}</p>
              <p className={`attribute ${dobClass}`}>{person.dob}</p>
              <p className={`attribute ${person.first_game_appearance === randomCharacter.first_game_appearance ? 'correct' : 'incorrect'}`}>{person.first_game_appearance}</p>
              <p className={`attribute ${person.karaoke === randomCharacter.karaoke ? 'correct' : 'incorrect'}`}>{person.karaoke}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}


  function renderGuess() {
    return (
      <div>
        <div id="problem">
          Guess the character:
        </div>
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

  if (state.score === 1) {
    return renderWinScreen();
  } else {
    return renderGuess();
  }
}

export default AppR;
