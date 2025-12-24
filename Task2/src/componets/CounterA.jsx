import React from 'react'
import useCounterHook from '../Hooks/useCounterHook';

export default function CounterA() {
    const {count, increaseCount, decreaseCount, resetCount} = useCounterHook(0);
  return (
    <div>
      <h1>CounterA</h1>
      <p>Count A: {count}</p>
      <button className="p-3 m-4 bg-green-500" onClick={increaseCount}>Increase</button>
      <button className="p-3 m-4 bg-red-500" onClick={decreaseCount}>Decrease</button>
      <button className="p-3 m-4 bg-blue-500" onClick={resetCount}>Reset</button>

      <p>In this Counter Increase + 1 and decrease -1 and Reset to 0</p>
    </div>
  )
}
