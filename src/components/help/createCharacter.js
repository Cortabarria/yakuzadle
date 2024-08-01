import Person from "../../model/Person";
import { arraysEqual } from "../../utils/utilFunction";

// Guarda los valores que el usuario ya saco en intentos pasados
function createCharacterFromAttributes(sharedAttributes) {
  // console.log(sharedAttributes.affiliation);
  const person = new Person({
    name: "Staminan Royale",
    sex: sharedAttributes.sex || "",
    affiliation: sharedAttributes.affiliation,
    hair: sharedAttributes.hair,
    occupation: sharedAttributes.occupation,
    involvement: sharedAttributes.involvement,
    first_game_appearance: sharedAttributes.first_game_appearance || "",
    last_game_appearance: sharedAttributes.last_game_appearance || "",
    karaoke: sharedAttributes.karaoke || "",
  });
  console.log("Persona es " + person.occupation);
  return person;
}

// Aca te devuelve todos los atributos diferentes que tienen; no contando el id o el nombre ya que los saltea
// Tambien eye por las dudas
function difference(character, random) {
  const differingAttributes = [];

  for (const prop in random) {
    if (random.hasOwnProperty(prop)) {
        if (prop === 'id' || prop === 'name') {
            continue;
        }

        if (random[prop] !== character[prop]) {
            console.log("createCharacter.js - prop-> " + prop);
            console.log("createCharacter.js - valor de prop del random-> " + random[prop]);
            console.log(
              "createCharacter.js - valor de prop de character-> " + character[prop]
            );

            differingAttributes.push({ attribute: prop, value: random[prop] });
        }
    }
  }

  return getRandomDifferingAttribute(differingAttributes);
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Agarra un attributo random que no se haya conseguido para mostrarselo al usuario como pista
function getRandomDifferingAttribute(differingAttributes) {
  if (differingAttributes.length === 0) {
    return null; 
  }

  const randomIndex = getRandomInt(0, differingAttributes.length - 1);

  return createPersonWithRandomAttribute(differingAttributes[randomIndex]);
}

// Crea el personaje que se mostrara en la pantalla con el valor random
function createPersonWithRandomAttribute(randomDifferingAttribute) {
  // Create a new Person object with default attributes
  const person = new Person({
    name: "Staminan Royale",
    sex: "",
    affiliation: [],
    hair: [],
    occupation: [],
    involvement: [],
    first_game_appearance: "",
    last_game_appearance: "",
    karaoke: "",
  });


  // Set the random differing attribute to the Person object
  switch (randomDifferingAttribute.attribute) {
    case "sex":
      person.sex = randomDifferingAttribute.value;
      break;
    case "affiliation":
      person.affiliation = randomDifferingAttribute.value;
      break;
    case "hair":
      person.hair = randomDifferingAttribute.value;
      break;
    case "occupation":
      person.occupation = randomDifferingAttribute.value;
      break;
    case "involvement":
      person.involvement = randomDifferingAttribute.value;
      break;
    case "first_game_appearance":
      person.first_game_appearance = randomDifferingAttribute.value;
      break;
    case "last_game_appearance":
      person.last_game_appearance = randomDifferingAttribute.value;
      break;
    case "karaoke":
      person.karaoke = randomDifferingAttribute.value;
      break;
    default:
      throw new Error(
        `Unsupported attribute '${randomDifferingAttribute.attribute}'`
      );
  }

  // Return the modified Person object
  return person;
}


export function getStaminanRoyale(sharedAttributes, random) {
  let per = createCharacterFromAttributes(sharedAttributes);
  // console.log("getStaminanRoyale - per " + per);
  console.log("sharedAttributes de getStaminan son " + sharedAttributes);
  return difference(per, random);
}

export function getBetterStaminanRoyale(attemptsMade, characterToGuess) {
  console.log("Attempts Made:", attemptsMade);

  attemptsMade.forEach((person) => {
    for (let key in characterToGuess) {
      if (
        characterToGuess[key] === person[key] &&
        key !== "id" &&
        key !== "name"
      ) {
        // console.log(
        //   "la key es " + key + " y el conte es " + characterToGuess[key]
        // );
        characterToGuess[key] = "";
      }
    }
  });

  // Get a list of non-empty attributes
  const nonEmptyAttributes = Object.entries(characterToGuess).filter(
    ([key, value]) => value !== ""
  );

  console.log("Non empty " + nonEmptyAttributes);

  // If there are no non-empty attributes, return null
  if (nonEmptyAttributes.length === 0) return null;

  // Select a random attribute from the non-empty ones
  const [key, value] =
    nonEmptyAttributes[Math.floor(Math.random() * nonEmptyAttributes.length)];

  // Initialize a new Person object with the selected attribute
  const StaminanRoyale = new Person({ [key]: value, name: "Staminan Royale" });

  return StaminanRoyale;
}

export function evenBetterStaminan(attempts, randomCharacter){
  // Compare attributes
  const newSharedAttributes = {};
  attempts.forEach((selectedCharacter) => {
    if (selectedCharacter) {
      Object.keys(randomCharacter).forEach((key) => {
        let isEqual;
        if (
          Array.isArray(randomCharacter[key]) &&
          Array.isArray(selectedCharacter[key])
        ) {
          isEqual = arraysEqual(randomCharacter[key], selectedCharacter[key]);
        } else {
          isEqual = randomCharacter[key] === selectedCharacter[key];
        }

        if (isEqual) {
          // console.log(key);
          newSharedAttributes[key] = randomCharacter[key];
        }
      });
    }
  });

  return getStaminanRoyale(newSharedAttributes, randomCharacter);
}