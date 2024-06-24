import React from "react";
import "./ImageAnimation.css";

const AnimatedImage = ({ src, alt }) => {
  return (
    <div className="image-container">
      <img src={src} alt={alt} className="animated-image" style={{width: "300px", height: "300px" } } />
    </div>
  );
};

export default AnimatedImage;
