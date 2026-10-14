# React + D3

React 把 svg、circle、g、path 等当作内置 intrinsic elements（和 div、span 一样），直接用 JSX 写，React 按标准 DOM API（document.createElementNS 等）创建真实 SVG 节点，不需要额外库。

## 关键点

- 属性即 props：SVG 属性驼峰化传入，如 strokeWidth、cx、cy、r、fill，React 渲染时转回原生 SVG 属性名（stroke-width 等）。

- react-dom 内置支持命名空间：React 知道 svg 子树要用 SVG namespace（<http://www.w3.org/2000/svg），自动用> createElementNS 创建，而不是普通 HTML 元素。
- 声明式更新：props 变了（比如随机生成的 radius、cx），React diff 后只更新对应 DOM 属性，不需要手动调用 setAttribute。
- 组合即组件：`<circle>/<path>` 可以像普通 JSX 一样被包进自定义组件（Eyes、Mouth），用 props 传参数，内部渲染原生 SVG 元素。

- 本例中D3 不操作 DOM，只当纯计算库，React 负责渲染
