import React , {useReducer}from 'react';

const initialState={
    firstCounter:0,
    secondCounte:10
}
const reducer = (state, action) =>{
    switch(action.type){
        case "increment":
            return { ...state,firstCounter:state.firstCounter+action.value}
        case "decrement":
            return { ...state,firstCounter:state.firstCounter-action.value}
        case "reset":
            return initialState  
        case "increment5":
            return { ...state,firstCounter:state.firstCounter+action.value}
        case "incrementCounter2":
            return { ...state,secondCounte:state.secondCounte+action.value}
        case "decrementCounter2":
            return { ...state,secondCounte:state.secondCounte-action.value}
           
        case "incremmentCounter5":
            return { ...state,secondCounte:state.secondCounte+action.value}
            case "reset5":
            return initialState
        default:
            return state 
    }
}



function UseReducerEx2 () {
    const [count, disptach] = useReducer(reducer,initialState)
    return (
        <>
        <div>
            <h1> {count.firstCounter} </h1> 
            <button onClick={()=> disptach({type:"increment", value:1})}>Increment</button>
            <button onClick={()=> disptach({type:"increment5", value:5})}>Increment5</button>
            <button onClick={()=> disptach({type:"decrement" ,value:1})}>Decrement</button>
            <button onClick={()=> disptach({type:"reset"})}>Reset</button>
        </div>
        <div>
        <h1> {count.secondCounte} </h1> 
            <button onClick={()=> disptach({type:"incrementCounter2", value:1})}>Increment</button>
            <button onClick={()=> disptach({type:"incremmentCounter5", value:5})}>Increment5</button>
            <button onClick={()=> disptach({type:"decrementCounter2" ,value:1})}>Decrement</button>
            <button onClick={()=> disptach({type:"reset5"})}>Reset</button>
        </div>
        </>
    )
}

export default UseReducerEx2 
