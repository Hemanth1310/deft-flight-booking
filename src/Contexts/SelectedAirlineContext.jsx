import { createContext, useState } from "react";


export const SelectedAirlineContext = createContext();

const SelectedAirlineContextProvider =(props)=>{
    const option = localStorage.getItem('deft-airlineOpt')
    const [opt,setOpt]= useState(option);

    const updateOpt=(optval)=>{
        localStorage.setItem('deft-airlineOpt',optval)
        setOpt(optval)
       
    }
    return(
        <SelectedAirlineContext.Provider value={{opt,updateOpt}}>
            {props.children}
        </SelectedAirlineContext.Provider> 
    )
}

export default SelectedAirlineContextProvider