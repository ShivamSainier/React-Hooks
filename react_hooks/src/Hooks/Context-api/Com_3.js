import React,{useContext} from 'react'
 import {UserContext} from "./Com_1"



function Com_3() {
    const name=useContext(UserContext)
    return (
        <div>
          {name.age}
        </div>
    )
}

export default Com_3
