import React, {useState, createContext } from 'react'

export const stateContext=createContext();


const StateContext = ({children}) => {
    
    const [ShowSlot, setShowSlot] = useState(false)
    const [ShowBookig, setShowBookig] = useState(false)
    const [Ticketcount, SetTicketcount] = useState(0)
    const [Movie, setMovie] = useState()
    const [time, settime] = useState()
    const [see, setsee] = useState();

    return (
        <stateContext.Provider value={{ShowSlot,setShowSlot,see,setsee,ShowBookig,setShowBookig,Ticketcount,SetTicketcount,Movie,setMovie,time,settime}}>
            {children}
        </stateContext.Provider>
    )
}

export default StateContext
