import React, { useState, useEffect } from "react";
import AnimatedImage from "./animation/AnimatedImage.js"

function ResultInformation({ randomCharacter }){
    return (
      <div className="squareInfo removeLater">

        
        <h2>
          {randomCharacter.name}
        </h2>
        
        <AnimatedImage
          src={`./images/charactersPortraits/${randomCharacter.id}.jpg`}
          alt={`Image of ${randomCharacter.name}`}
        />
      </div>
    );

}

export default ResultInformation