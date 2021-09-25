import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const pageSlice = createSlice({
  name: "page",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = pageSlice.actions;

export default pageSlice.reducer;
