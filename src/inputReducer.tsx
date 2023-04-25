import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 1,
};

export const inputSlice = createSlice({
  name: "inputReducer",
  initialState,
  reducers: {
    chooseInputValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { chooseInputValue } = inputSlice.actions;

export default inputSlice.reducer;
