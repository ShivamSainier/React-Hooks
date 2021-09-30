import React, { useState,useEffect } from 'react'

function UseEffect() {
    useEffect(() => {
        alert("useEffect Runs after every Render !")
    })
    const [data,setData]=useState(0)
    return (
        <div>
            <button onClick={()=>{setData(data+2)}}>Click me</button>
            <h1>{data}</h1>
        </div>
    )
}

export default UseEffect
