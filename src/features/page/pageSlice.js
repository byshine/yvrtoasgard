import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
  total: 2,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.value < state.total) {
        state.value += 1;
      }
    },
    decrement: (state) => {
      if (state.value > 1) {
        state.value -= 1;
      }
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = pageSlice.actions;

export default pageSlice.reducer;
