import characters from "./characters";

const getCharacterList = () => {
  return characters.map((character) => ({
    id: character.id,
    name: character.name,
    sex: character.sex,
    afiliation: character.afiliation,
    hair: character.hair,
    eye: character.eye,
    height: character.height,
    dob: character.dob,
    first_game_appearance: character.first_game_appearance,
    karaoke: character.karaoke,
  }));
};

export default getCharacterList;
