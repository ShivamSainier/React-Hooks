import React, { useState } from 'react'

function Objects_useState() {
    const [value,setValue]=useState({f_name:"",l_name:""})
    return (
        <div>
            <h1>F name : {value.f_name}</h1>
            <h2>L name : {value.l_name}</h2>
            <input type="text" placeholder="First Name" onChange={(e)=>setValue({...value,f_name:e.target.value})}></input>
            <input type="text" placeholder="First Name" onChange={(e)=>setValue({...value,l_name:e.target.value})}></input>
            
        </div>
    )
}

export default Objects_useState
