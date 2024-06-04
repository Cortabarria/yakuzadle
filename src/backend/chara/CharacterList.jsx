// CharacterList.jsx
import React, { useState, useEffect } from "react";
import  Character from "../model/characterY.js";
import fetchCharacters from "./fetchCharacters.js";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      try {
        const characterData = await fetchCharacters();
        setCharacters(characterData);
      } catch (error) {
        console.error("Error fetching characters:", error);
      }
    };

    getCharacters();
  }, []);

  return (
    <div>
      <h1>Character List?!</h1>
      <ul>
        <li>Hi</li>
        {characters.map((character) => (
          <li key={character.id}>
            {character.name} - First Game Appearance:{" "}
            {character.first_game_appearance}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CharacterList;
