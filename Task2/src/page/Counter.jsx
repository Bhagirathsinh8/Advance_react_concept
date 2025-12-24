import React from 'react'
import { useState } from 'react';

export default function Counter() {
    const [count, setCount] = useState(0);

    const increaseCount = () =>{
        setCount(count + 1);
    }
    const decreaseCount = () =>{
        setCount(count - 1);
    }
  return (
    <div>
      <h1>Counter</h1>
      <button className="p-3 m-4 bg-green-500" onClick={increaseCount}>+</button>
      {count}
      <button className="p-3 m-4 bg-red-500" onClick={decreaseCount}>-</button>
    </div>
  )
}
