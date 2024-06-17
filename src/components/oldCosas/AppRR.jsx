// AppRR.jsx
import React, { useState, useEffect, useRef } from "react";
import { ReturnCharactersJSON } from "../../utils/returnCharactersJSON";
import { getRandomCharacter } from "../../utils/randomCharacter";
import RenderWinScreen from "../guessCharacterRandom/RenderWinScreen";
import RenderGuess from "../RenderGuessR";
import FailedAttempts from "../guessCharacterRandom/FailedAttempts";
import "../../styles/styles.css";
import "../../assets/fonts/fonts.css";
import RenderLoseScreen from "../guessCharacterRandom/RenderLoseScreen";

function AppR() {
  const [peopleList, setPeopleList] = useState([]);
  const [randomCharacter, setRandomCharacter] = useState(null);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!hasInitialized.current) {
      const list = ReturnCharactersJSON();
      setPeopleList(list);
      const character = getRandomCharacter(list);
      setRandomCharacter(character);
      console.log(character.name);
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

    if (selectedCharacter) {
      setPeopleList((prevList) =>
        prevList.filter(
          (person) =>
            person.name.toLowerCase() !== selectedCharacter.name.toLowerCase()
        )
      );
    }

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
