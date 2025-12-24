import { useState } from "react";

const useCounterHook = (initialValue = 0) =>{
    const [count, setCount] = useState(initialValue);


       const increaseCount = () =>{
        setCount(count + 1);
    }
    const decreaseCount = () =>{
        if(count > 0){
            setCount(count - 1);
            return;
        } else {
            alert("Count cannot be negative");
            setCount(0);
            return;
        }
    }

    const resetCount = () =>{
        setCount(initialValue);
    }

        const increaseCountby2 = () =>{
        setCount(count + 2);
    }

    return {count, increaseCount, decreaseCount, resetCount,increaseCountby2};
}


export default useCounterHook;