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
  const currentDate = getTodayDate();
  
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

export function getTodayDate(){
  const date = new Date();

  let day = String(date.getDate()).padStart(2, "0");
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let year = date.getFullYear();

  let currentDate = `${day}/${month}/${year}`;

  return currentDate;

}

export function getAttempts(peopleList) {
  const date = getTodayDate();
  const chars = [];
  const items = {};

  // Collect keys that start with the date
  const keys = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    if (key.startsWith(date + "@")) {
      keys.push(key);
    }
  }

  // Sort keys alphabetically
  keys.sort();

  // Fetch and store the items in sorted order
  keys.forEach((key) => {
    const item = localStorage.getItem(key);
    chars.push(item);
  });

  // console.log(chars);

  let attempts = [];

  chars.forEach((char) => {
    let jsonChar = JSON.parse(char);
    // console.log(jsonChar.name);
  })

  attempts = chars.map((peopleData) => new Person(JSON.parse(peopleData)));
/*   console.log(attempts);
 */  return attempts;


  const people = peopleList.map((peopleData) => new Person(peopleData));


  chars.forEach((char) => {
    let charName = char.replace(/"/g, '');
    people.forEach((pep) => {
      if(pep.name === charName){
        attempts.push(pep);
      }
    });
  });

  return attempts;
}

export function getShareResults(attempts, character){
  let shareMessage = "#Yakuzadle - " + getTodayDate() + " - " + attempts.length + "/10\n" ;
  attempts.forEach((attempt) => {
    // Sex
    if (attempt.sex === character.sex) {
      shareMessage = shareMessage.concat("🟩");
    } else {
      shareMessage = shareMessage.concat("🟥");
    }

    // Check if hair match
    let fullMatchHair = arraysEqual(attempt.hair, character.hair);
    let partialMatchHair = attempt.hair.some((har) =>
      character.hair.includes(har)
    );

    if (fullMatchHair) {
      shareMessage = shareMessage.concat("🟩");
    } else if (partialMatchHair) {
      shareMessage = shareMessage.concat("🟨");
    } else {
      shareMessage = shareMessage.concat("🟥");
    }

    // Check if affiliation match
    let fullMatchAff = arraysEqual(attempt.affiliation, character.affiliation);
    let partialMatchAff = attempt.affiliation.some((aff) =>
      character.affiliation.includes(aff)
    );

    if (fullMatchAff) {
      shareMessage = shareMessage.concat("🟩");
    } else if (partialMatchAff) {
      shareMessage = shareMessage.concat("🟨");
    } else {
      shareMessage = shareMessage.concat("🟥");
    }

    // Check if occupation match
    let fullMatchOcc = arraysEqual(attempt.occupation, character.occupation);
    let partialMatchOcc = attempt.occupation.some((occ) =>
      character.occupation.includes(occ)
    );

    if (fullMatchOcc) {
      shareMessage = shareMessage.concat("🟩");
    } else if (partialMatchOcc) {
      shareMessage = shareMessage.concat("🟨");
    } else {
      shareMessage = shareMessage.concat("🟥");
    }

    // First Game
    if (attempt.first_game_appearance === character.first_game_appearance) {
      shareMessage = shareMessage.concat("🟩");
    } else {
      shareMessage = shareMessage.concat("🟥");
    }

    // Last Game
    if (attempt.last_game_appearance === character.last_game_appearance) {
      shareMessage = shareMessage.concat("🟩");
    } else {
      shareMessage = shareMessage.concat("🟥");
    }

    // Check if involvement match
    let fullMatchInv = arraysEqual(attempt.involvement, character.involvement);
    let partialMatchInv = attempt.involvement.some((Inv) =>
      character.involvement.includes(Inv)
    );

    if (fullMatchInv) {
      shareMessage = shareMessage.concat("🟩");
    } else if (partialMatchInv) {
      shareMessage = shareMessage.concat("🟨");
    } else {
      shareMessage = shareMessage.concat("🟥");
    }

    // Karaoke
    if (attempt.karaoke === character.karaoke) {
      shareMessage = shareMessage.concat("🟩");
    } else {
      shareMessage = shareMessage.concat("🟥");
    }

    shareMessage = shareMessage.concat("\n");
    
    
  });
  
  shareMessage = shareMessage.concat(
    "https://cortabarria.github.io/yakuzadle/"
  );

  if (navigator.clipboard && window.isSecureContext) {
    // navigator.clipboard is only available in secure contexts (https)
    navigator.clipboard
      .writeText(shareMessage)
      .then(() => {
        console.log("Text copied to clipboard");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  } else {
    // Fallback method using execCommand
  }


}