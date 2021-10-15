import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#FFF");
  function handleChangeColor(newChildreColor) {
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);
    setChildrenColor(newChildreColor);
  }

  return (
    <div
      onClick={handleChangeColor}
      className="parent"
      style={{ backgroundColor: color }}
    >
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;
