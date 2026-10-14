# React 绘制 + D3 计算

D3 负责计算
d3.scaleBand() 计算每个月份对应的横向位置
d3.scaleLinear() 将销售额转换为 SVG 的纵向坐标
d3.max() 计算最大销售额

React call `data.map()` 根据数据生成柱子和月份标签, render `<svg>` 图形和文字
