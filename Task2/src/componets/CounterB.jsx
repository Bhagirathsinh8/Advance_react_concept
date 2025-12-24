import React from 'react'
import useCounterHook from '../Hooks/useCounterHook';

export default function CounterB() {
    const {count, increaseCount, decreaseCount, resetCount,increaseCountby2} = useCounterHook(10);

 
  return (
    <div>
      <h1>CounterB</h1>
      <p>Count B: {count}</p>
      <button className="p-3 m-4 bg-green-500" onClick={increaseCount}>Increase</button>
      <button className="p-3 m-4 bg-green-500" onClick={increaseCountby2}>Increase by 2</button>
      <button className="p-3 m-4 bg-red-500" onClick={decreaseCount}>Decrease</button>
      <button className="p-3 m-4 bg-blue-500" onClick={resetCount}>Reset</button>

            <p>In this Counter Increase + 1 ,Increase +2, decrease -1 and Reset to 10</p>
    </div>
  )
}
