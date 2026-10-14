import * as d3 from "d3";

const data = [
  { month: "Jan", sales: 30 },
  { month: "Feb", sales: 50 },
  { month: "Mar", sales: 40 },
  { month: "Apr", sales: 80 },
];

export default function BarChart() {
  const width = 500;
  const height = 300;

  const margin = {
    top: 20,
    right: 20,
    bottom: 40,
    left: 40,
  };

  // D3：计算每根柱子的水平位置
  const x = d3
    .scaleBand()
    .domain(data.map((d) => d.month))
    .range([margin.left, width - margin.right])
    .padding(0.2);

  // D3：把销售额转换为垂直坐标
  const y = d3
    .scaleLinear()
    .domain([0, d3.max(data, (d) => d.sales) ?? 0])
    .nice()
    .range([height - margin.bottom, margin.top]);

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      style={{ width: "100%", maxWidth: width }}
    >
      {/* React：绘制柱子 */}
      {data.map((d) => (
        <rect
          key={d.month}
          x={x(d.month) ?? 0}
          y={y(d.sales)}
          width={x.bandwidth()}
          height={height - margin.bottom - y(d.sales)}
          fill="steelblue"
          rx={4}
        />
      ))}

      {/* React：绘制月份标签 */}
      {data.map((d) => (
        <text
          key={d.month}
          x={(x(d.month) ?? 0) + x.bandwidth() / 2}
          y={height - 12}
          textAnchor="middle"
          fontSize={12}
          fill="currentColor"
        >
          {d.month}
        </text>
      ))}
    </svg>
  );
}
