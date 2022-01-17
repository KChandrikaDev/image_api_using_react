import React , { useState}from 'react'

function UseStateEx2() {
    const initialValue=0;
    const [count ,setCount]=useState(initialValue)
    return (
        <div>
            <h1>Count:{count}</h1>
            <button onClick={()=>setCount(initialValue)}>Reset</button>
            <button onClick={()=>setCount((prevState)=> prevState+1)}>Increment</button>
            <button onClick={count===0?0:()=>setCount((prevState)=> prevState-1)}>Decrement</button>
            <button onClick={()=>setCount((prevState)=> prevState+5)}>Inc 5</button>
        </div>
    )
}

export default UseStateEx2
