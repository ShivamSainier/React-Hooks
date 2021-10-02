import React from 'react'
import Com_2 from './Com_2'

export const UserContext=React.createContext()

function Com_1() {

    return (
        <div>
            <UserContext.Provider value={{name:"shviam",age:20}}>
           <Com_2 />
           </ UserContext.Provider>
        </div>
    )
}

export default Com_1
