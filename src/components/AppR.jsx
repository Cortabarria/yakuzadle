import React, { useState } from "react";
import { MyComponent3 } from "../utils/MyComponent3";
import { getRandomCharacter } from "../utils/randomCharacter";
import RenderWinScreen from "./RenderWinScreen";
import RenderGuess from "./RenderGuess";
import FailedAttempts from "./FailedAttempts"; // Import FailedAttempts
import "../styles/styles.css";
import "../assets/fonts/fonts.css";

const peopleList = MyComponent3();
const randomCharacter = getRandomCharacter(peopleList);

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
      setState({
        ...state,
        score: 1,
        inputText: "",
        selectedName: "",
        incorrect: false,
        isValidSelection: false,
      });
    } else {
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

  if (state.score === 1) {
    return (
      <RenderWinScreen
        renderFailedAttempts={() => (
          <FailedAttempts state={state} randomCharacter={randomCharacter} />
        )}
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
          <FailedAttempts state={state} randomCharacter={randomCharacter} />
        )}
      />
    );
  }
}

export default AppR;
