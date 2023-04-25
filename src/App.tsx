// import './App.css'
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment as inc,
  decrement as dec,
  incrementByAmount,
  decrementByAmount,
  chooseValue,
} from "./reducer";
import { makeTrue, chooseErrorValue } from "./errorReducer";
import { chooseInputValue } from "./inputReducer";
import { store } from "./store";

export default function App() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.value);
  const errorR = useSelector((state) => state.errorReducer.value);
  const inputV = useSelector((state) => state.inputReducer.value);

  // const [value, setValue] = useState(0);
  // const [error, setError] = useState(false);
  // const [inputValue, setInputValue] = useState(1);

  const increment = () => {
    dispatch(incrementByAmount(inputV));
    dispatch(chooseValue(counter + inputV));
    // setValue(value + inputV);

    // error && setError(false);
    errorR && dispatch(chooseErrorValue(false));
  };

  const decrement = () => {
    const newValue = counter - inputV;
    if (newValue < 0) {
      // setError(true);
      dispatch(chooseErrorValue(true));
      dispatch(chooseValue(0));
    } else {
      dispatch(chooseValue(newValue));
      // setValue(newValue);
      // dispatch(decrementByAmount(inputV));
    }
  };

  const getInputValue = (e) => {
    // setInputValue(Number(e.target.value));
    dispatch(chooseInputValue(Number(e.target.value)));
  };

  return (
    <main>
      <input type="number" value={inputV} onChange={getInputValue} />
      <button onClick={getInputValue}>clear</button>
      <div>{counter}</div>
      {errorR && <div>"not decrement"</div>}
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </main>
  );
}
