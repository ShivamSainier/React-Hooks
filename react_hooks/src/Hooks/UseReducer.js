import React,{useReducer} from 'react'

function UseReducer() {
    const initialState=0
    const reducer=(state,action)=>{
        switch (action.type) {
            case 'increment':
                return state+action.value
                break;
            case 'decrement':
                return state-action.value
            case 'reset':
                return initialState
           
        }
    }
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={()=>{dispatch({type:'increment',value:1})}}>Increment +</button>
            <button onClick={()=>{dispatch({type:'decrement',value:1})}}>Decrement -</button>
            <button onClick={()=>{dispatch({type:'increment',value:5})}}>Increment By 5 -</button>
            <button onClick={()=>{dispatch({type:'increment',value:10})}}>Increment By 10 -</button>
            <button onClick={()=>{dispatch({type:'decrement',value:10})}}>Decrement By 10 -</button>
            <button onClick={()=>{dispatch({type:'reset'})}}>Reset </button>
        </div>
    )
}

export default UseReducer
