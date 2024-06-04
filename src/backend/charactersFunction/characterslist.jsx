// CharacterList.jsx

import React, { useState, useEffect } from "react";
import { fetchCharacterNames } from "./charactersJS"; // Update the path if necessary

function CharacterList() {
  const [characterNames, setCharacterNames] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const names = await fetchCharacterNames();
      setCharacterNames(names);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>Character Names?</h1>
      <ul>
        {characterNames.map((name, index) => (
          <li key={index}>Character name = {name}</li>
        ))}
      </ul>
    </div>
  );
}

export default CharacterList;
