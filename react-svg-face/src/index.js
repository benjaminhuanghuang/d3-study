import React from "react";
import ReactDOM from "react-dom";

const width = 960;
const height = 500;
const centerX = width / 2;
const centerY = height / 2;
const strokeWidth = 20;
const eyeOffsetX = 90;
const eyeOffsetY = 100;
const eyeRadius = 40;
const mouthWidth = 20;
const mouthRadius = 140;


const App = () => (
  <svg width={width} height={height}>
    <g transform={`translate(${centerX},${centerY})`}>
      <circle r={centerY - strokeWidth / 2} fill="yellow" stroke="black" stroke-width={strokeWidth} />
      <circle cx={-eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
      <circle cx={eyeOffsetX} cy={-eyeOffsetY} r={eyeRadius} />
    </g>
  </svg>
);

ReactDOM.render(<App />, document.getElementById("root"));
