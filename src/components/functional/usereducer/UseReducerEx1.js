import React , {useReducer}from 'react'

const initialState=0;
const reducer = (state, action) =>{
    switch(action){
        case "increment":
            return  state+1
        case "decrement":
            return state-1
        case "reset":
            return initialState   
        case "increment5":
            return state+5
        default:
            return state 
    }
}

function UseReducerEx1() {
    const[count, disptach] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>
            {count}</h1>
            <button onClick={()=> disptach("increment")}>Increment</button>
            <button onClick={()=> disptach("increment5")}>Increment5</button>
            <button onClick={()=> disptach("decrement")}>Decrement</button>
            <button onClick={()=> disptach("reset")}>Reset</button>
        </div>
    )
}

export default UseReducerEx1
