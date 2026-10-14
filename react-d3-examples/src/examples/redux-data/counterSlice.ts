import { createSlice } from "@reduxjs/toolkit";

// State interface for the counter slice
interface CounterState {
  count: number;
}

const initialState: CounterState = {
  count: 0,
};

// Redux Toolkit use Immer library to allow us to write "mutating" logic in reducers.
const counterSlice = createSlice({
  name: "counter",
  initialState,
  // Reducers are functions that handle actions and update the state accordingly.
  reducers: {
    increment(state) {
      state.count += 1;
    },
    decrement(state) {
      state.count -= 1;
    },
    incrementByAmount(state, action: { payload: number }) {
      state.count += action.payload;
    },
    reset(state) {
      state.count = 0;
    },
  },
});

export const { increment, decrement, incrementByAmount, reset } =
  counterSlice.actions;

export default counterSlice.reducer;
