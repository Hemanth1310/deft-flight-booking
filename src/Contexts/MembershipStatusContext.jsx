import { createContext, useContext, useState } from "react"

export const MembershipStatusContext=createContext()

const MembershipStatusContextProvider =(props)=>{
    const [membershipStatus,setMembershipStatus] =useState(()=>{
        const mstatus =localStorage.getItem('deft-membershipStatus');
        if(mstatus===''){
            return false
        }else if(mstatus==='true'){return true}
        else if(mstatus==='false'){return false}

    })
    const updateMembership=(mval)=>{
        setMembershipStatus(mval)
        localStorage.setItem('deft-membershipStatus',mval);
    }

    return(
        <MembershipStatusContext.Provider value={{membershipStatus,updateMembership}}>
            {props.children}
        </MembershipStatusContext.Provider>
    )
}

export default MembershipStatusContextProvider