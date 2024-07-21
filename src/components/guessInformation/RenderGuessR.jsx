import React, { useState, useEffect, useRef, memo } from "react";
import {
  Button,
  TextField,
  Autocomplete,
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import "../../styles/input.css";
import heartShower from "./heartShower";
import getBackgroundImage from "../guessInformation/ImageBringer";
import { styled } from "@mui/material/styles";
import FailedAttempts from "../guessCharacterRandom/FailedAttempts";

const CircularButton = styled(Button)({
  width: 50, 
  height: 50, 
  borderRadius: "50%",
  padding: 0,
  minWidth: 0,
});

const RenderGuess = memo(({
  selectedName,
  isValidSelection,
  staminanUsed,
  score,
  failedAttempts,
  handleInputChange,
  checkAnswer,
  peopleList,
  handleStaminanClick,
  randomCharacter,
}) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredOptions, setFilteredOptions] = useState([]);
  const inputRef = useRef(null);

  const handleAutocompleteChange = (event, newValue) => {
    const value = newValue ? newValue.name : "";
    handleInputChange({ target: { value } });
    setInputValue(value);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, [selectedName]);

  useEffect(() => {
    const filterOptions = (options, inputValue) => {
      // If empty input, don't show any options
      if (inputValue.trim() === "") {
        return [];
      }

      // Split the input value into parts based on spaces and parentheses, and remove any empty parts
      const currentInputValue = inputValue.toLowerCase().trim();
      const inputParts = inputValue
        .toLowerCase()
        .split(/[\s(]+/)
        .filter((part) => part !== "");

      const filtered = options.filter((option) => {
        // Split the option's name into parts based on spaces and parentheses
        const nameParts = option.name.toLowerCase().split(/[\s(]+/);

        // Check if any part of input matches any part of the name
        const matchesInput = inputParts.every((inputPart) => {
          return nameParts.some((namePart) => namePart.startsWith(inputPart));
        });

        if (!matchesInput) {
          return false;
        }

        // Check if option name contains the input value as a whole word
        const optionName = option.name.toLowerCase();
        if (!optionName.includes(inputValue.toLowerCase())) {
          return false;
        }

        // Check from each possible starting point in the name parts
        for (let i = 0; i <= nameParts.length - inputParts.length; i++) {
          let matches = true;

          // Check each part of the input against the corresponding part of the name
          for (let j = 0; j < inputParts.length; j++) {
            if (!nameParts[i + j]?.startsWith(inputParts[j])) {
              matches = false; // If any part doesn't match, set matches to false
              break; // Exit the loop early since this starting point doesn't match
            }
          }
          // If all parts matched, return true for this option
          if (matches) {
            return true;
          }
        }

        // If no starting point resulted in a match, return false for this option
        return false;
      });

      // Sets the options so if you click out and again, it will still show
      setFilteredOptions(filtered);
    };

    filterOptions(peopleList, inputValue);
  }, [peopleList, inputValue]);

  const renderOption = (props, option) => (
    <ListItem {...props}>
      <ListItemAvatar>
        <Avatar
          alt={option.name}
          src={getBackgroundImage(option)}
          sx={{ height: "100px", width: "100px", marginRight: "30px" }}
          variant="square"
        />
      </ListItemAvatar>
      <ListItemText primary={option.name} />
    </ListItem>
  );

  // Sort peopleList alphabetically
  const sortedPeopleList = peopleList.sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div className="change">
      <div className="squareInfo">
        <div className="inputContainer">
          <Autocomplete
            style={{ width: 500, background: "whitesmoke" }}
            value={selectedName ? { name: selectedName } : null}
            onChange={handleAutocompleteChange}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
              handleInputChange({ target: { value: newInputValue } });
            }}
            options={filteredOptions}
            getOptionLabel={(option) => option.name}
            renderOption={renderOption}
            isOptionEqualToValue={(option, value) =>
              option.value === value.value
            }
            // isOptionEqualToValue={(option, value) => option.name === value.name}
            renderInput={(params) => (
              <TextField
                {...params}
                label="🐲 Write the character's name 🐲"
                variant="outlined"
                inputRef={inputRef}
                autoFocus
              />
            )}
          />
          <Button
            variant="contained"
            color="primary"
            onClick={checkAnswer}
            disabled={!isValidSelection}
          >
            Guess!
          </Button>

          <CircularButton
            title="Use Staminan Royale"
            variant="contained"
            color="primary"
            onClick={handleStaminanClick}
            disabled={staminanUsed || score > -5}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/assets/staminan.webp`}
              alt="staminan"
              style={{ width: "100%", height: "100%", borderRadius: "50%" }}
            />
          </CircularButton>
        </div>
        <div className="heartContainer">{heartShower(score)}</div>
      </div>
      <FailedAttempts
        failedAttempts={failedAttempts}
        randomCharacter={randomCharacter}
      />
    </div>
  );
});

export default RenderGuess;
