import React , {useState} from 'react'

export default function UseStateEx1() {
    const [count, setCount] =useState(0)
    return (
        <div className="container">
            <h1>count: {count}</h1>
            <button onClick={()=>setCount(count+1)}>count</button>
        </div>
    )
}
