import React,{useReducer} from 'react'

function Input_useReducer() {
    const reducer=(state,action)=>{
        state=action
        return state
        
    }
    const [value,setValue]=useReducer(reducer,"")
    console.log(value)
    return (
        <div>
            <h1>{value}</h1>
            <input type="text" placeholder="Input" onChange={(event)=>{
                setValue(event.target.value)
            }}></input>
        </div>
    )
}

export default Input_useReducer
