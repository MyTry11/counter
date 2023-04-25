import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: boolean;
}

const initialState: CounterState = {
  value: false,
};

export const errorSlice = createSlice({
  name: "errorReducer",
  initialState,
  reducers: {
    makeTrue: (state) => {
      state.value = !state.value;
    },
    chooseErrorValue: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { makeTrue, chooseErrorValue } = errorSlice.actions;

export default errorSlice.reducer;
