// src/models/Person.js
class Person {
  constructor({
    id,
    name,
    sex,
    affiliation,
    hair,
    eye,
    height,
    dob,
    first_game_appearance,
    karaoke,
  }) {
    this.id = id;
    this.name = name;
    this.sex = sex;
    this.affiliation = affiliation;
    this.hair = hair;
    this.eye = eye;
    this.height = height;
    this.dob = dob;
    this.first_game_appearance = first_game_appearance;
    this.karaoke = karaoke;
  }

  greet() {
    return `Hello, my name is ${this.name}, I am ${this.hair}, and I am affiliated with ${this.affiliation}.`;
  }
}

export default Person;
