import React, {useState} from 'react'

function UseStateEx4() {
    const [data, setData] = useState([])
    const addItem = () =>{
        setData([...data,
            {id:data.length+1,
            value:Math.floor(Math.random()*10)+1}])
    }
    return (
        <div>
            <button onClick={()=>addItem()}>Add Dataa</button>
            {
                data.map((data,i)=>(
                    <li key={i}> {data.value}</li>
                ))
            }
        </div>
    )
}

export default UseStateEx4
