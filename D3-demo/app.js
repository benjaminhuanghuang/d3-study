heros = ["A", "B", "C", "D"];

// generate li
d3.select("ul")
  .selectAll("li")
  .data(heros)
  .enter()
  .append("li")
  .text((hero) => hero);

const numbers = [20, 30, 40, 49];
let height = 40;
// generate bar in svg
d3.select("svg")
  .selectAll("rect")
  .data(numbers)
  .enter() // iterate missed rect
  .append("rect")
  .attr("width", (n) => n)
  .attr("height", height - 1)
  .attr("transform", (n, i) => "translate(100," + i * height + ")");
