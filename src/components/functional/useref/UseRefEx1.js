import React, {useRef} from 'react'
import { useEffect } from 'react/cjs/react.development'

function UseRefEx1() {
    const inputRef = useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    },[])
    return (
        <div>
            <input ref={inputRef} type="text"  />
        </div>
    )
}

export default UseRefEx1
