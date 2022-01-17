import React, { useState, useEffect } from "react";

function UseEffectEx3() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const logMousePositions = (e) => {
    console.log("Mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect(
    ()=>{
        console.log("Updating conditinally [UseEffectEx2]")
        window.addEventListener('mousemove', logMousePositions)
        return ()=>{
            console.log("UnMounting")
            window.removeEventListener('mousemove', logMousePositions)
        }
    },[]
)
  return (
    <div>
      <h1>Clinet X: {x}</h1>
      <h1>Client y: {y}</h1>
    </div>
  );
}

export default UseEffectEx3;
