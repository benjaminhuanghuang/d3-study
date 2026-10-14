# React vs D3.js

## 职责

React：负责 UI 结构、组件、状态管理和页面更新。

D3.js：负责数据处理、比例尺（scales）、坐标轴、布局算法、动画以及数据可视化相关计算。

SVG 负责实际绘制柱子、坐标轴和文字。

不一定要让 D3.js 负责绘制所有内容。可以只用 D3.js 计算数据，再让 React 渲染 SVG。 这
是 React 项目中很容易上手、也很容易维护的方式。

## 如何把 D3.js 融入 React？

- React 绘制，D3 计算（推荐入门）: D3 计算比例尺、数据位置和路径，React 用 JSX 渲染 SVG 元素。职责清晰，容易维护。

- D3 直接操作 DOM: React 提供一个 DOM 容器，D3 通过 useRef 和 useEffect 在容器内部绘图。适合复用复杂的 D3 图表、D3 坐标轴和动画。
