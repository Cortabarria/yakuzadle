// characters.js

export async function fetchCharacterNames() {
  try {
    const response = await fetch("characters.json"); // Update the path to your JSON file
    if (!response.ok) {
      throw new Error("Failed to fetch characters");
    }
    const characters = await response.json();
    return characters.map((character) => character.name);
  } catch (error) {
    console.error("Error fetching character names:", error.message);
    return []; // Return an empty array in case of error
  }
}
