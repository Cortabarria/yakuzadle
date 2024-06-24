import React, { useState, useEffect } from "react";
import AnimatedImage from "../animation/AnimatedImage.js"
import getBackgroundImage from "../guessInformation/ImageBringer.jsx";

function ResultInformation({ randomCharacter }){
    return (
      <div className="squareInfo removeLater">

        
        <h2>
          {randomCharacter.name}
        </h2>
        
        <AnimatedImage
          src={getBackgroundImage(randomCharacter)}
          alt={`Image of ${randomCharacter.name}`}
        />
      </div>
    );

}

export default ResultInformation