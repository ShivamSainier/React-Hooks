import React, { useState } from 'react'

function Counter_useState() {
    const [state,setState]=useState(0)

    const increment=()=>{
        setState(state+1)
    }
    return (
        <div>
            <button onClick={increment}>Count</button>
            <h1>{state}</h1>
        </div>
    )
}

export default Counter_useState
