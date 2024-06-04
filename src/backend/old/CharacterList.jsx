import React, { useEffect, useState } from "react";
import { getCharacterNames } from "./CharacterUtils"; // Assuming CharacterUtils.js is the name of the JavaScript file containing the functions

function CharacterList() {
  const [names, setNames] = useState([]);

  useEffect(() => {
    async function fetchCharacterNames() {
      try {
        const characterNames = await getCharacterNames();
        console.log("Character names:", characterNames); // Log the fetched character names
        setNames(characterNames);
      } catch (error) {
        console.error("Error fetching character names:", error);
      }
    }
    fetchCharacterNames();
  }, []);

  console.log("State names:", names); // Log the state of names

  return (
    <div>
      <h2>List of Characters</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
