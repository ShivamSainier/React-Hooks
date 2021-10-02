import React, { useState,useEffect } from 'react'

function UseEffect() {
    const [state,setState]=useState(0)

    const tick=()=>{
        setState(state+1)
    }
    useEffect(() => {
     const intervel=setInterval(tick,1000)  
     return ()=>{
         clearInterval(intervel)  
     } 
    },[state] )
   
    return (
        <div>
            <h1>{state}</h1>
        </div>
    )
}

export default UseEffect
