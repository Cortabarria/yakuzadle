import React, { useState, useEffect, useRef } from "react";
import { ReturnCharactersJSON } from "../../utils/returnCharactersJSON";
import { getRandomCharacter } from "../../utils/randomCharacter";
import RenderWinScreen from "../conclusion/RenderWinScreen";
import RenderGuess from "../guessInformation/RenderGuessR";
import FailedAttempts from "./FailedAttempts";

import "../../styles/styles.css";
import "../../assets/fonts/fonts.css";
import RenderLoseScreen from "../conclusion/RenderLoseScreen";
import { getStaminanRoyale } from "../help/createCharacter";

import BasicModal from "../modal/modalStaminan";
import WantToUseModal from "../modal/ModalUseStaminan";

import { arraysEqual } from "../../utils/utilFunction";


function AppR() {
  const [peopleList, setPeopleList] = useState([]);
  const [randomCharacter, setRandomCharacter] = useState(null);
  const [isModalNoClueToGiveOpen, setIsModalNoClueToGiveOpen] = useState(false); // State to control the modal visibility
  const [isModalWantToUseOpen, setIsModalWantToUseOpen] = useState(false); // State to control the modal visibility
  // useRef to track whether the initialization has been done
  const hasInitialized = useRef(false);

  let audioChupando = new Audio('./audio/drink.mp3');

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
    sharedAttributes: {}, // New state to store shared attributes
    staminanUsed: false, // New state to track Staminan button usage
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

    // Compare attributes
    const newSharedAttributes = {};
    if (selectedCharacter) {
      Object.keys(randomCharacter).forEach((key) => {
        let isEqual;
        if (
          Array.isArray(randomCharacter[key]) &&
          Array.isArray(selectedCharacter[key])
        ) {
          isEqual = arraysEqual(randomCharacter[key], selectedCharacter[key]);
        } else {
          isEqual = randomCharacter[key] === selectedCharacter[key];
        }

        if (isEqual) {
          // console.log(key);
          newSharedAttributes[key] = randomCharacter[key];
        }
      });
    }

    // Merge new shared attributes with existing ones
    const updatedSharedAttributes = {
      ...state.sharedAttributes,
      ...newSharedAttributes,
    };

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
        sharedAttributes: updatedSharedAttributes, // Update shared attributes
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
        sharedAttributes: updatedSharedAttributes, // Update shared attributes
      }));
    }
  }

  function openModalToGetHelp() {
    setIsModalWantToUseOpen(true); 
  }

  function handleStaminanClick() {
    setIsModalWantToUseOpen(false); 

    if (!state.staminanUsed) {
      const staminanCharacter = getStaminanRoyale(
        state.sharedAttributes,
        randomCharacter
      );

      if (staminanCharacter === null) {
        // console.log("Staminan character is null");
        setIsModalNoClueToGiveOpen(true); // Open the modal
      } else {
        audioChupando.play();
        setState((prevState) => ({
          ...prevState,
          score: prevState.score - 1,
          failedAttempts: [...prevState.failedAttempts, staminanCharacter],
          staminanUsed: true,
        }));
      }
    }
  }

  // Render the win screen if the score is 1
  if (state.score === 1) {
    return (
      <RenderWinScreen
        failedAttempts={state.failedAttempts}
        randomCharacter={randomCharacter}
      />
    );
  }

  // Render the lose screen if the score is -10
  if (state.score === -10) {
    return (
      <RenderLoseScreen
        failedAttempts={state.failedAttempts}
        randomCharacter={randomCharacter}
      />
    );
  }

  // Render the guessing interface otherwise
  else {
    return (
      <>
        <RenderGuess
          selectedName={state.selectedName}
          isValidSelection={state.isValidSelection}
          staminanUsed={state.staminanUsed}
          score={state.score}
          failedAttempts={state.failedAttempts}
          handleInputChange={handleInputChange}
          checkAnswer={checkAnswer}
          peopleList={peopleList}
          handleStaminanClick={openModalToGetHelp}
          randomCharacter={randomCharacter}
        />
        <BasicModal
          open={isModalNoClueToGiveOpen}
          handleClose={() => setIsModalNoClueToGiveOpen(false)}
        />
        <WantToUseModal
          open={isModalWantToUseOpen}
          handleClose={() => setIsModalWantToUseOpen(false)}
          handleContinue={() => handleStaminanClick()}
        />
      </>
    );
  }
}

export default AppR;
