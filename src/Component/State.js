import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


export const State = () => {
    const [count, setCount] = useState(0);
    const [number, setNumber] = useState(0);
    
    useEffect(()=>{
        console.log("component render trong useEffect");
    },[count])

  return (
    <div>
        {/* <Navigate to={"/products"}/> */}
        <p>Count : {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setNumber(number + 1)}>Increment Number</button>
        
    </div>
  )
}
