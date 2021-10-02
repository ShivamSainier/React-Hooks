import React, { useState } from 'react'

function Counter_useState() {
    const [state,setState]=useState({counter:0})
    const Counter=(value)=>{
        setState({
            counter:state.counter+value
        })
    }
    return (
        <div>
            <h1>{state.counter}</h1>
            <button onClick={()=>{Counter(1)}}>Increment by 1</button>
            <button onClick={()=>{Counter(2)}}>Increment by 2</button>
            <button onClick={()=>{Counter(3)}}>Increment by 3</button>
            <button onClick={()=>{Counter(4)}}>Increment by 4</button>
           
            
        </div>
    )
}

export default Counter_useState
