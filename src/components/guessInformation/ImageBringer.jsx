
function getBackgroundImage(person) {
  if(person.name == "Staminan Royale"){
    const imageUrl = `${process.env.PUBLIC_URL}/images/charactersPortraits/Staminan Royale.webp`;
    return imageUrl;
  }
  const imageUrl = `${process.env.PUBLIC_URL}/images/charactersPortraits/${person.first_game_appearance}/${person.name}.webp`;
  return imageUrl;

  //Muy compli hacer funcionar bien esto. Ahora siempre trae la imagen y si no, devuelve una letra de la inicial

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
