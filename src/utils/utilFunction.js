import peopleDate from "./date.json";
import Person from "../model/Person";
// Helper function to check if two arrays have the same elements, regardless of order
export function arraysEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  
  const sortedArr1 = arr1.slice().sort();
  const sortedArr2 = arr2.slice().sort();
  return JSON.stringify(sortedArr1) === JSON.stringify(sortedArr2);
}


export function vhToPx (vh){
  // Get the viewport height in pixels
  const viewportHeight = window.innerHeight;

  // Convert vh to pixels
  return (vh / 100) * viewportHeight;
};

export function getTodayCharacter(peopleList) {
  const date = new Date();

  let day = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let year = date.getFullYear();

  let currentDate = `${day}/${month}/${year}`;

  // console.log(currentDate);
  
  const todayCharacterData = peopleDate.find(
    (entry) => entry.date === currentDate
  );

  if (todayCharacterData) {
    const todayCharacter = new Person(todayCharacterData.character);
    // console.log(todayCharacter.name);
    return todayCharacter;
  } else {
    console.log("No character found for today.");
    return null;
  }
}

