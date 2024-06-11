import React, { useRef, useEffect } from "react";
import "../../styles/styles.css";
import "../../assets/fonts/fonts.css";
import "../../styles/irezumi.css";

function AppIR() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    audio.play();

    const preventPause = (e) => {
      e.preventDefault();
      audio.play();
    };

    audio.addEventListener("pause", preventPause);

    return () => {
      audio.removeEventListener("pause", preventPause);
    };
  }, []);

  return (
    <div className="centered-content">
      <div>
        <h1>WIP</h1>
        <img src="images/pageImage/wip.png" width="50%" alt="MC" />
      </div>
      <audio
        ref={audioRef}
        src="audio/wip.mp3"
        autoPlay
        style={{ display: "none" }}
      />
    </div>
  );
}

export default AppIR;
