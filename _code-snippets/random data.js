function randomData(n = 8) {
  return d3.range(n).map((i) => ({
    label: `Item ${i + 1}`,
    value: Math.round(10 + Math.random() * 90),
  }));
}
