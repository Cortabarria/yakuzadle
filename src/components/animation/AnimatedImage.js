import React from "react";
import "./ImageAnimation.css";

const AnimatedImage = ({ src, alt }) => {
  return (
    <div className="image-container">
      <img src={src} alt={alt} className="animated-image" />
    </div>
  );
};

export default AnimatedImage;
