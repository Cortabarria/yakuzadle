
function getBackgroundImage(person) {
  const imageUrl = `images/charactersPortraits/${person.name}.png`;

  // Create an image object to check if the image exists
  const img = new Image();
  img.src = imageUrl;

  // Check if the image exists
  if (img.complete) {
    return `${imageUrl}`;
  } else {
    return `images/charactersPortraits/rgg.png`;
  }
}

export default getBackgroundImage;
