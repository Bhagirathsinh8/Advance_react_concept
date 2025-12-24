import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {  decrement, increment, incrementByAmount, stateReset } from "./counterSlice";

export default function Counter() {
  const count = useSelector((store) => store.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      Counter
      <div>
        <h2>Count: {count}</h2>
        <button
          class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => {dispatch(increment());}}>+</button>
        <button
          class="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => {dispatch(decrement());}}>-</button>
          
        <button
          class="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => {dispatch(stateReset());}}>Reset</button>
        <button
          class="bg-blue-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => {dispatch(incrementByAmount(50));}}>Increment By 100</button>

      </div>
    </div>
  );
}
