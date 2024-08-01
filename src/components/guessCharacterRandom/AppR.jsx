import React, { useState, useEffect, useRef } from "react";
import { ReturnCharactersJSON } from "../../utils/returnCharactersJSON";
import { getRandomCharacter } from "../../utils/randomCharacter";
import RenderGuess from "../guessInformation/RenderGuessR";
import FailedAttempts from "./FailedAttempts";

import "../../styles/styles.css";
import "../../assets/fonts/fonts.css";
import { evenBetterStaminan, getBetterStaminanRoyale, getStaminanRoyale } from "../help/createCharacter";

import BasicModal from "../modal/modalStaminan";
import WantToUseModal from "../modal/ModalUseStaminan";
import getBackgroundImage from "../guessInformation/ImageBringer";

import { arraysEqual } from "../../utils/utilFunction";

import ConclusionComponent from "../conclusion/ConclusionComponent";
import { getTodayDate, getAttempts } from "../../utils/utilFunction";

import Person from "../../model/Person";

function AppR({charac, daily, listChar}) {
  const [peopleList, setPeopleList] = useState([]);
  const [randomCharacter, setRandomCharacter] = useState(null);
  const [isModalNoClueToGiveOpen, setIsModalNoClueToGiveOpen] = useState(false); // State to control the modal visibility
  const [isModalWantToUseOpen, setIsModalWantToUseOpen] = useState(false); // State to control the modal visibility
  // useRef to track whether the initialization has been done
  const hasInitialized = useRef(false);

  let audioChupando = new Audio(`${process.env.PUBLIC_URL}/audio/drink.mp3`);

  const todayDate = getTodayDate();

  const [state, setState] = useState({
    inputText: "",
    selectedName: "",
    score: 0,
    incorrect: false,
    isValidSelection: false,
    failedAttempts: [],
    sharedAttributes: {},
    staminanUsed: false,
    failedAttemptsShare: [],
  });

  useEffect(() => {
    if (!hasInitialized.current) {
      // Load score from localStorage and set it in the state
      const storedScore = localStorage.getItem(todayDate + "-dailyScore");
      const parsedScore = storedScore ? parseInt(storedScore, 10) : 0;

      
      // Generate the list of characters and a random character
      const list = ReturnCharactersJSON();
      setPeopleList(list);
      const character =
      charac !== undefined ? charac : getRandomCharacter(list);
      setRandomCharacter(character);
      
      // This is for the attempts made before
      const previousAttemptsMade = getAttempts(list);
      previousAttemptsMade.forEach((char) => {
        setPeopleList((prevList) =>
          prevList.filter(
            (person) => person.name.toLowerCase() !== char.name.toLowerCase()
          )
        );
        // sharedAttributesCheck(char);

      })


      // Load shared attributes for staminan
      let storedSharedAtt = 0;
      let sharedAttributesStored = {};
      storedSharedAtt = localStorage.getItem("sharedAttributes@"+ todayDate + "@dailyAttempts");

      if (storedSharedAtt !== null){
        sharedAttributesStored = (JSON.parse(storedSharedAtt));
        console.log(
          "AppR.jsx - 79 - sharedAttributesStored: " + storedSharedAtt
        );
        console.log(JSON.parse(storedSharedAtt));
      }

      // Load staminan used
      let staminanUsed;
      let staminanUsedStored = localStorage.getItem(
        "staminanUsed@" + todayDate + "@dailyAttempts"
      );
      if (staminanUsedStored === "1") {
        staminanUsed = true;
      }else{
        staminanUsed = false;
      }

      
      
      // Preload images
      preloadImages(list);
      
      // Mark the initialization as done
      setState((prevState) => ({
        ...prevState,
        score: parsedScore,
        failedAttempts: previousAttemptsMade,
        sharedAttributes: sharedAttributesStored,
        staminanUsed: staminanUsed,
      }));
      

      hasInitialized.current = true;
    }
  }, []);

  const preloadImages = (list) => {
    list.forEach((person) => {
      const img = new Image();
      img.src = getBackgroundImage(person);
    });
  };



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

    // let updatedSharedAttributes2 = sharedAttributesCheck(randomCharacter);

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

    console.log(newSharedAttributes);

    // Check if the answer is correct
    if (answer.toLowerCase() === randomCharacter.name.toLowerCase()) {
      setState((prevState) => ({
        ...prevState,
        score: 11,
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
        score: prevState.score + 1,
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
    if (daily) {
      localStorage.setItem(
        todayDate + "@" + state.score + "@dailyAttempts",
        JSON.stringify(selectedCharacter)
      );
      localStorage.setItem(
        "sharedAttributes@" + todayDate + "@dailyAttempts",
        JSON.stringify(updatedSharedAttributes)
      );
    }
  }

  function openModalToGetHelp() {
    setIsModalWantToUseOpen(true); 
  }

  function handleStaminanClick() {
    setIsModalWantToUseOpen(false);
    console.log("Aca viene: "); 
    console.log(state.sharedAttributes);

    if (!state.staminanUsed) {
/*       const staminanCharacter = getStaminanRoyale(
        state.sharedAttributes,
        randomCharacter
      ); */

      const staminanCharacter = evenBetterStaminan(state.failedAttempts, randomCharacter);

      if (staminanCharacter === null) {
        // console.log("Staminan character is null");
        setIsModalNoClueToGiveOpen(true); // Open the modal
      } else {
        audioChupando.play();
        setState((prevState) => ({
          ...prevState,
          score: prevState.score + 1,
          failedAttempts: [...prevState.failedAttempts, staminanCharacter],
          staminanUsed: true,
        }));
        localStorage.setItem(
          todayDate + "@" + state.score + "@dailyAttempts",
          JSON.stringify(staminanCharacter)
        );
        localStorage.setItem(
          "staminanUsed@" + todayDate + "@dailyAttempts", 1
        );
      }
    }
  }

  function sharedAttributesCheck(selectedCharacter) {
    try {
      if (!selectedCharacter || !charac) {
        console.error("Character data is missing:", {
          selectedCharacter,
          charac,
        });
        return {}; // Return an empty object if either character is missing
      }

      // Compare attributes
      const newSharedAttributes = {};

      Object.keys(charac).forEach((key) => {
        let isEqual;
        if (
          Array.isArray(charac[key]) &&
          Array.isArray(selectedCharacter[key])
        ) {
          isEqual = arraysEqual(charac[key], selectedCharacter[key]);
        } else {
          isEqual = charac[key] === selectedCharacter[key];
        }

        if (isEqual) {
          newSharedAttributes[key] = charac[key];
        }
      });

      
      // Merge new shared attributes with existing ones
      const updatedSharedAttributes = {
        ...state.sharedAttributes,
        ...newSharedAttributes,
      };
      
      console.log(
        "AppR.jsx - 293 " +
          "Shared - updatedSharedAttributes " +
          updatedSharedAttributes
      );
      return updatedSharedAttributes;
    } catch (error) {
      console.error("Error in sharedAttributesCheck:", error);
      return state.sharedAttributes; // Return the current shared attributes if an error occurs
    }
  }

  // Render the win screen if the score is 1
  if (state.score === 11) {
    if(daily){
      localStorage.setItem(todayDate + "-dailyScore", state.score);
      localStorage.setItem(todayDate + "-dailyWin", true);
    }
    return (
      <ConclusionComponent
        gameOutcome={"win"}
        randomCharacter={randomCharacter}
        failedAttempts={state.failedAttempts}
      />
    );
  }

  // Render the lose screen if the score is -10
  if (state.score === 10) {
    if (daily) {
      localStorage.setItem(todayDate + "-dailyScore", state.score);
      localStorage.setItem(todayDate + "-dailyWin", false);

    }
    return (
      <ConclusionComponent
        gameOutcome={"lose"}
        randomCharacter={randomCharacter}
        failedAttempts={state.failedAttempts}
      />
    );
  }

  // Render the guessing interface otherwise
  else {
    if (daily) {
      if(state.score !== null){
        localStorage.setItem(todayDate + "-dailyScore", state.score);
      }
    }  
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
