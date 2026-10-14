import { useSelector, useDispatch } from "react-redux";
import type { RootState, AppDispatch } from "./store";
import { increment } from "./counterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.count);

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="min-h-screen px-4 py-8">
      <h1>Count: {count}</h1>

      <button onClick={() => dispatch(increment())}>+1</button>
    </div>
  );
}

export default App;
