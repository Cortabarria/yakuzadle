// src/models/Person.js
class Person {
  constructor({
    id,
    name,
    sex,
    affiliation,
    occupation,
    involvement,
    hair,
    first_game_appearance,
    last_game_appearance,
    karaoke,
  }) {
    this.id = id;
    this.name = name;
    this.sex = sex;
    this.affiliation = Array.isArray(affiliation) ? affiliation : [affiliation];

    this.occupation = Array.isArray(occupation) ? occupation : [occupation];

    this.hair = Array.isArray(hair) ? hair : [hair];

    this.involvement = Array.isArray(involvement) ? involvement : [involvement];


    this.first_game_appearance = first_game_appearance;
    this.last_game_appearance = last_game_appearance;
    this.karaoke = karaoke;
  }
}

export default Person;
