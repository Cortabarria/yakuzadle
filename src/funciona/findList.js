import React, { useState } from "react";
import { MyComponent3 } from "./MyComponent";
import "./styles.css"; // Import the CSS file
import "../assets/fonts/fonts.css"

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

function getTableHeaders(){
    return (
        <div className="boxy container-outer">
          <div className="failed-attempt groupGuessesAnswersRow background-header-square">
            <p className="squearanswer" style={{ fontSize : "1.5 vh"}}>Name</p>
            <p className={`attribute squearanswer`}>Sex</p>
            <p className={`attribute squearanswer`}>Affiliation</p>
            <p className={`attribute squearanswer`}>Hair color</p>
            <p className={`attribute squearanswer`}>Eye color</p>
            <p className={`attribute squearanswer`}>Height</p>
            <p className={`attribute squearanswer`}>Year of Birth</p>
            <p className={`attribute squearanswer`}>First game appearance</p>
            <p className={`attribute  squearanswer`}>Karaoke</p>
          </div>
        </div>
    )
}
  
  
  return (
    <div>
      <h1 className="edosz-text">Yakuzadle</h1>
      <div className="failed-attempts" id="failedAttempts">

        {getTableHeaders()}

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
            <div className="boxy container-outer">
              <div className="failed-attempt groupGuessesAnswersRow" key={index}>
                <p className="squearanswer" style={{ fontSize : "1.5 vh"}}>{person.name}</p>
                <p className={`attribute ${person.sex === randomCharacter.sex ? 'correct' : 'incorrect'} squearanswer`}>{person.sex}</p>
                <p className={`attribute ${person.affiliation === randomCharacter.affiliation ? 'correct' : 'incorrect'} squearanswer`}>{person.affiliation}</p>
                <p className={`attribute ${person.hair === randomCharacter.hair ? 'correct' : 'incorrect'} squearanswer`}>{person.hair}</p>
                <p className={`attribute ${person.eye === randomCharacter.eye ? 'correct' : 'incorrect'} squearanswer`}>{person.eye}</p>
                <p className={`attribute ${higClass} squearanswer`}>{person.height}</p>
                <p className={`attribute ${dobClass} squearanswer`}>{person.dob}</p>
                <p className={`attribute ${person.first_game_appearance === randomCharacter.first_game_appearance ? 'correct' : 'incorrect'} squearanswer`}>{person.first_game_appearance}</p>
                <p className={`attribute ${person.karaoke === randomCharacter.karaoke ? 'correct' : 'incorrect'} squearanswer`}>{person.karaoke}</p>
              </div>
            </div>
          );
        })}
      </div>
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
