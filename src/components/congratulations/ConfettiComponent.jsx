import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from "@react-hook/window-size";

const ConfettiComponent = ({ runConfetti }) => {
  const [width, height] = useWindowSize();

  return <div>{runConfetti && <Confetti width={width} height={height} />}</div>;
};

export default ConfettiComponent;
