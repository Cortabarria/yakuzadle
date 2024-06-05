import React from "react";
import Person from "../model/Person";
import peopleData from "./data.json";


export function MyComponent3() {
  const people = peopleData.map((personData) => new Person(personData));

  return people;
}
