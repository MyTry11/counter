import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterSlice from "./reducer";
import errorReducer, { errorSlice } from "./errorReducer";
import inputReducer from "./inputReducer";
// import {}

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    errorReducer: errorReducer,
    inputReducer: inputReducer,
  },
});

// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
