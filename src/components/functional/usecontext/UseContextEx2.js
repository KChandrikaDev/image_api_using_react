import React,{useContext} from 'react';
import {userContext,  chanelContext} from './UseContextMain'

function UseContextEx2() {
  const user = useContext(userContext);
  const channel = useContext(chanelContext)
    return (
        <div>
            Hello Context {user} {channel}
        </div>
    )
}

export default UseContextEx2
