// src/components/MyComponent.js
import React from "react";
import Person from "./Person";
//import peopleData from "../data.json";
import peopleData from "./data.json";

const MyComponent = () => {
  const people = peopleData.map((personData) => new Person(personData));

  return (
    <div>
      <h1>OOP in React</h1>
      <ul>
        {people.map((person) => (
          <li key={person.id}>{person.greet()}</li>
        ))}
      </ul>
    </div>
  );
};

const MyComponent2 = () => {
  const people = peopleData.map((personData) => new Person(personData));

  return (
    <div>
      <h1>OOP in HTML</h1>
      <ul>
        {people.map((person) => (
          <li key={person.id}>{person.greet()}</li>
        ))}
      </ul>
    </div>
  );
};


const MyComponent3 = () => {
  const people = peopleData.map((personData) => new Person(personData));

  return people;
};


export { MyComponent , MyComponent2, MyComponent3 };