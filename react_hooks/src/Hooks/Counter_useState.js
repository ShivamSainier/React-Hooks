import React, { useState } from 'react'

function Counter_useState() {
    const [state,setState]=useState(0)

   
    return (
        <div>
            <h1>{state}</h1>
            <button onClick={()=>{setState(state+1)}}>Increment</button>
            <button onClick={()=>{setState(state-1)}}>Deccrement</button>
            <button onClick={()=>{setState(prev=>prev+5)}}>Increment by 5</button>
            
        </div>
    )
}

export default Counter_useState
