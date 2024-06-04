import React from "react";
import Character from "../model/characterY"; // Import the Character model

// Define a functional component to render a list of characters
export default function CharacterList({ characters }) {
  return (
    <div>
      <h2>List of Characters</h2>
      <ul>
        {characters.map((character) => (
          <li key={character.id}>
            <strong>{character.name}</strong> - {character.affiliation}
          </li>
        ))}
      </ul>
    </div>
  );
}
