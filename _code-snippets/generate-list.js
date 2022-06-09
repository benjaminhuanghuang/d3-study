heros = ["A", "B", "C", "D"];

// generate li
d3.select("ul")
  .selectAll("li")
  .data(heros)
  .enter() // iterate missed li
  .append("li")
  .text((hero) => hero);

const numbers = [20, 30, 40, 49];
let hiegh = 40;
// generate bar in svg
d3.select("svg")
  .selectAll("rect")
  .data(numbers)
  .enter() // iterate missed rect
  .append("rect")
  .attr("width", (n) => n);
