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
    last_game_appearance,
    karaoke,
  }) {
    this.id = id;
    this.name = name;
    this.sex = sex;
    this.affiliation = Array.isArray(affiliation) ? affiliation : [affiliation];
    this.hair = Array.isArray(hair) ? hair : [hair];
    this.eye = eye;
    this.height = height;
    this.dob = dob;
    this.first_game_appearance = first_game_appearance;
    this.last_game_appearance = last_game_appearance;
    this.karaoke = karaoke;
  }

  greet() {
    return `Hello, my name is ${this.name}, I am ${
      this.sex
    }, I have ${this.hair.join(", ")} hair, my eyes are ${this.eye}, I am ${
      this.height
    } tall, I was born on ${this.dob}, my first game appearance was in ${
      this.first_game_appearance
    }, my last game appearance was in ${
      this.last_game_appearance
    } and my favorite karaoke song is ${this.karaoke}.`;
  }
}

export default Person;
