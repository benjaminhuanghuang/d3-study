import React, { useRef, useEffect } from "react";
import { select } from "d3";

const data = [15, 4, 39, 111];

export default function HookDemo() {
  const svgRef = useRef();
  useEffect(() => {
    const svg = select(svgRef.current);
    svg
      .selectAll("rect")
      .data(data)
      .enter()
      .append("rect")
      .attr("x", (d, i) => i * 70)
      .attr("y", 0)
      .attr("width", 25)
      .attr("height", (d, i) => d)
      .attr("fill", "green");
  }, []);
  return (
    <>
      <h1>Hook SVG</h1>
      <svg ref={svgRef}></svg>
    </>
  );
}
