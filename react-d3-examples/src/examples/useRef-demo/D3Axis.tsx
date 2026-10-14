import { useEffect, useRef } from "react";
import * as d3 from "d3";

export default function D3Axis() {
  const axisRef = useRef<SVGGElement>(null);

  useEffect(() => {
    const scale = d3.scaleLinear().domain([0, 100]).range([0, 400]);

    const axis = d3.axisBottom(scale);

    d3.select(axisRef.current!).call(axis);
  }, []);

  return (
    <svg width="440" height="60">
      <g ref={axisRef} transform="translate(20, 20)" />
    </svg>
  );
}
