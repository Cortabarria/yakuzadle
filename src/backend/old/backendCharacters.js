// Assuming the JSON file is named characters.json and is located in the same directory as this script

// Function to fetch the JSON file
async function fetchCharacters() {
  try {
    const response = await fetch("characters.json");
    const characters = await response.json();
    return characters;
  } catch (error) {
    console.error("Error fetching characters:", error);
    return [];
  }
}

// Function to extract names from the characters array
async function getCharacterNames() {
  try {
    const characters = await fetchCharacters();
    const names = characters.map((character) => character.name);
    return names;
  } catch (error) {
    console.error("Error getting character names:", error);
    return [];
  }
}

// Call the function to get character names
getCharacterNames().then((names) => {
  console.log("Character names:", names);
});
