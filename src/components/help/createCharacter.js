import Person from "../../model/Person";

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
            // console.log(prop);
            // console.log(random[prop]);
            // console.log(character[prop]);

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
  return difference(createCharacterFromAttributes(sharedAttributes), random);
}