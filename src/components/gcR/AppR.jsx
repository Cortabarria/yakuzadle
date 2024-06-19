import React, { useState, useEffect, useRef } from "react";
import { ReturnCharactersJSON } from "../../utils/returnCharactersJSON";
import { getRandomCharacter } from "../../utils/randomCharacter";
import RenderWinScreen from "./RenderWinScreen";
import RenderGuess from "../RenderGuessR";
import FailedAttempts from "./FailedAttempts";

import "../../styles/styles.css";
import "../../assets/fonts/fonts.css";
import RenderLoseScreen from "./RenderLoseScreen";
import ResultInformation from "../ResultInformation";

function AppR() {
  const [peopleList, setPeopleList] = useState([]);
  const [randomCharacter, setRandomCharacter] = useState(null);

  // useRef to track whether the initialization has been done
  const hasInitialized = useRef(false);

  useEffect(() => {
    // Check if the initialization has not been done yet
    if (!hasInitialized.current) {
      // Generate the list of characters and a random character
      const list = ReturnCharactersJSON();
      setPeopleList(list);
      const character = getRandomCharacter(list);
      setRandomCharacter(character);
      console.log(character.name);

      // Mark the initialization as done
      hasInitialized.current = true;
    }
  }, []);

  const [state, setState] = useState({
    inputText: "",
    selectedName: "",
    score: 0,
    incorrect: false,
    isValidSelection: false,
    failedAttempts: [],
  });

  // Wait until randomCharacter is set before rendering
  if (!randomCharacter) return null;

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

    // Remove the selected character from the peopleList
    if (selectedCharacter) {
      setPeopleList((prevList) =>
        prevList.filter(
          (person) =>
            person.name.toLowerCase() !== selectedCharacter.name.toLowerCase()
        )
      );
    }

    // Check if the answer is correct
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

  // Render the win screen if the score is 1
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

  // Render the lose screen if the score is -10
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
  }

  // Render the guessing interface otherwise
  else {
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
