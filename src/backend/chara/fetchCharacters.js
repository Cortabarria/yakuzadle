// fetchCharacters.js
import { Character } from "../model/characterY.js";

async function fetchCharacters() {
  const response = await fetch("characters.json");
  const data = await response.json();

  return data.map(
    (character) =>
      new Character(
        character.id,
        character.name,
        character.sex,
        character.affiliation,
        character.hair,
        character.eye,
        character.height,
        character.dob,
        character.first_game_appearance,
        character.karaoke
      )
  );
}

export default fetchCharacters;
