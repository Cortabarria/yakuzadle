// AppR.jsx
import React, { useState } from "react";
import { MyComponent3 } from "../utils/MyComponent3";
import { getRandomCharacter } from "../utils/randomCharacter";
import RenderWinScreen from "./RenderWinScreen";
import RenderGuess from "./RenderGuess";
import FailedAttempts from "./FailedAttempts";
import "../styles/styles.css";
import "../assets/fonts/fonts.css";
import RenderLoseScreen from "./RenderLoseScreen";
import ResultInformation from "./inprocess/ResultInformation";

const peopleList = MyComponent3();
const randomCharacter = getRandomCharacter(peopleList);
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

  function handleInputChange(event) {
    const inputText = event.target.value;
    const isValidSelection = peopleList.some(
      (person) => person.name.toLowerCase() === inputText.toLowerCase()
    );
    setState((prevState) => ({
      ...prevState,
      inputText,
      selectedName: inputText,
      isValidSelection,
    }));
  }

  function checkAnswer() {
    const answer = state.selectedName;
    const selectedCharacter = peopleList.find(
      (person) => person.name.toLowerCase() === answer.toLowerCase()
    );

    if (answer.toLowerCase() === randomCharacter.name.toLowerCase()) {
      setState((prevState) => ({
        ...prevState,
        score: 1,
        inputText: "",
        selectedName: "",
        incorrect: false,
        isValidSelection: false,
        failedAttempts: selectedCharacter
          ? [...prevState.failedAttempts, selectedCharacter]
          : prevState.failedAttempts,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        score: prevState.score - 1,
        inputText: "",
        selectedName: "",
        incorrect: true,
        isValidSelection: false,
        failedAttempts: selectedCharacter
          ? [...prevState.failedAttempts, selectedCharacter]
          : prevState.failedAttempts,
      }));
    }
  }

  if (state.score === 1) {
    return (
      <RenderWinScreen
        renderFailedAttempts={() => (
          <FailedAttempts state={state} randomCharacter={randomCharacter} />
        )}
        randomCharacter={randomCharacter}
      />
    );
  }
  if (state.score === -10) {
    return (
      <RenderLoseScreen
        state={state}
        handleInputChange={handleInputChange}
        checkAnswer={checkAnswer}
        peopleList={peopleList}
        renderFailedAttempts={() => (
          <FailedAttempts
            state={state}
            randomCharacter={randomCharacter}
            score={state.score}
          />
        )}
        randomCharacter={randomCharacter}
      />
    );
  } else {
    return (
      <RenderGuess
        state={state}
        handleInputChange={handleInputChange}
        checkAnswer={checkAnswer}
        peopleList={peopleList}
        renderFailedAttempts={() => (
          <FailedAttempts
            state={state}
            randomCharacter={randomCharacter}
            score={state.score}
          />
        )}
      />
    );
  }
}

export default AppR;
