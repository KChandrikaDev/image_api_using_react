import React, { useState,useEffect,useRef } from 'react'

function UseRefEx2() {
    const [time, setTime] = useState(0);
    let intervel = useRef()
  useEffect(()=>{
       intervel.current = setInterval(()=>{
   setTime(prevTime=>prevTime+1)
      },1000)
      return ()=>{
          clearInterval(intervel)
      }

  },[])
    return (
        <div>
            <h1>{time}</h1>
            <button onClick={()=>clearInterval(intervel.current)}>Clear</button>
        </div>
    )
}

export default UseRefEx2
