export function getRandomCharacter(peopleList) {
  const randomIndex = Math.floor(Math.random() * peopleList.length);
  return peopleList[randomIndex];
}
