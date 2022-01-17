import React,{useState, useEffect} from 'react'

function UseEffectEx2() {
    const [count, setCount]= useState(0)
    const [name, setName]= useState("")
    useEffect(
        ()=>{
            console.log("Updating conditinally [UseEffectEx2]")
            document.title=`clicked ${count}`
        },[count]
    )
    return (
        <div>
            <input type="text" value={name} onChange={e=>setName(e.target.value)}/>
            <button onClick={()=>setCount(count+1)}>
                Count:{count}
            </button>
        </div>
    )
}

export default UseEffectEx2
