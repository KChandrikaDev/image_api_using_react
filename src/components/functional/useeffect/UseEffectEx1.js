import React,{useState, useEffect} from 'react'

function UseEffectEx1() {
    const [count, setCount]= useState(0)
    useEffect(
        ()=>{
            document.title=`clicked ${count}`
        }
    )
    return (
        <div>
            <button onClick={()=>setCount(count+1)}>
                Count:{count}
            </button>
        </div>
    )
}

export default UseEffectEx1
