import React, { useState } from "react";

export default function Show() {
  const [style, setStyle] = useState({ display: "none" });
  const [styled, setStyled] = useState({
    border: "1px solid gray",
    width: 300,
    height: 300,
    padding: 10,
    margin: 100,
    backgroundColor: "orange",
    border: 0,
  });

  return (
    <div className="App">
      <h2>Hidden Button in the box. Move mouse in the box</h2>
      <div
        style={styled}
        onMouseEnter={(e) => {
          setStyle({ display: "block" });
          setStyled({
            border: "1px solid gray",
            width: 300,
            height: 300,
            padding: 10,
            margin: 100,
            backgroundColor: "black",
            border: 0,
          });
        }}
        onMouseLeave={(e) => {
          setStyle({ display: "none" });
          setStyled({
            border: "1px solid gray",
            width: 300,
            height: 300,
            padding: 10,
            margin: 100,
            backgroundColor: "orange",
            border: 0,
          });
        }}
      >
        <button style={style}>Click</button>
      </div>
    </div>
  );
}
