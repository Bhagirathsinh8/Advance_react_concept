import React from "react";
import useCounterHook from "../Hooks/useCounterHook";

export default function CounterC() {
  const { count, decreaseCount, resetCount, increaseCountby2 } =
    useCounterHook(20);

  const handleIncrease = () => {
    console.log("Increasing count");
    increaseCountby2();
  };
  return (
    <div>
      <h1>CounterC</h1>
      <p>Count C: {count}</p>
      <button className="p-3 m-4 bg-green-500" onClick={handleIncrease}>
        Increase
      </button>
      <button className="p-3 m-4 bg-red-500" onClick={decreaseCount}>
        Decrease
      </button>
      <button className="p-3 m-4 bg-blue-500" onClick={resetCount}>
        Reset
      </button>
      <p>
        In this Counter Increase + 2 ,Increase +2, decrease -1 and Reset to 20
      </p>
    </div>
  );
}
