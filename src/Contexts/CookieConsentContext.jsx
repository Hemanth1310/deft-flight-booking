import { type } from "@testing-library/user-event/dist/type";
import { createContext, useState } from "react";


export const CoookieConsentContext = createContext();


const CoookieConsentContextProvider = (props) =>{
    const [consentStatus,setConsentStatus] = useState(()=>{
        const cookiels= localStorage.getItem('deft-cookieStatus')
        console.log('cookiels'+typeof cookiels)
        if(cookiels===''){
            return false
        }else if(cookiels==='false'){
            return false
        }else if(cookiels==='true'){
            return true
        }
    })
    
    const updateConsent=(cstatus)=>{
        setConsentStatus(cstatus)
        localStorage.setItem('deft-cookieStatus',cstatus)
    }
    return(
        <CoookieConsentContext.Provider value={{consentStatus,updateConsent}}>
            {props.children}
        </CoookieConsentContext.Provider>
    )
}

export default CoookieConsentContextProvider
