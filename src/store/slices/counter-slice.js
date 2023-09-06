import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  name:"hello"
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    IncrementNumber: (state) => {
      state.value++;
    },
    DecrementNumber: (state) => {
      state.value--;
    },
  },
});

// Action creators are generated for each case reducer function
export const { IncrementNumber, DecrementNumber } = counterSlice.actions;

export default counterSlice.reducer;
