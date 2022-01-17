import React from 'react'
import UseContextEx1 from './UseContextEx1'
export const userContext = React.createContext();
export const chanelContext = React.createContext();

function UseContextMain() {
  
    return (
        <div>
            <userContext.Provider value={"Chandhu"}> 
            <chanelContext.Provider value={"Cave Tech"}>
            <UseContextEx1 />
            </chanelContext.Provider>
          </userContext.Provider>
        </div>
    )
}

export default UseContextMain
