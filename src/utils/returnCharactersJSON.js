import Person from "../model/Person";
import peopleData from "./data.json";


export function ReturnCharactersJSON() {
  const people = peopleData.map((personData) => new Person(personData));

  // Sort peopleList alphabetically
  // const sortedPeopleList = people.sort((a, b) => a.name.localeCompare(b.name));

  return people;
}
