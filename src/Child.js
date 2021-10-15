import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor }) {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  onChangeColor = () => {
    const randomColorNew = getRandomColor();
    setColor(randomColorNew);
  };

  console.log(onChangeColor);
  return (
    <div
      onClick={onChangeColor}
      className="child"
      style={{ backgroundColor: color }}
    />
  );
}

export default Child;
