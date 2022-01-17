import React, {useState} from 'react'
import UseEffectEx3 from './UseEffectEx3'

function UseEffectContainer() {
    const [display, setDisplay] = useState(true)
    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle button</button>
            {display&& <UseEffectEx3 />}
        </div>
    )
}

export default UseEffectContainer
