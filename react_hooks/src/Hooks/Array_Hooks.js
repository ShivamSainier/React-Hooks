import React, { useState,useEffect } from 'react'


function Array_Hooks() {
    const [item,setItem]=useState([])
    const [data,setData]=useState(1)
    

    function buttonHendler(data){
        setItem([...item,data])
    }
    function dataHendler(){
        setData(data+1)
        const newData={
            name:data
        }
        buttonHendler(newData)
    }
    return (
        <div><ol>
            {
                item.map((data,index)=><li>{data.name}</li>)
            }
            </ol>
            <button onClick={dataHendler}>Click me </button>
        </div>
    )
}

export default Array_Hooks
