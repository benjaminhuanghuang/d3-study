import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen px-4 py-8">
      <button
        type="button"
        className="counter"
        onClick={() => setCount((count) => count + 1)}
      >
        Count is {count}
      </button>
    </div>
  );
}

export default App;
