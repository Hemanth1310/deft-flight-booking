import React, { useContext, useState } from 'react'
import './TicketOptions.css'
import { ChoosenFlight } from '../../Components/ChoosenFlight/ChoosenFlight'
import { Standard } from '../../Components/TicketTypes/Standard'
import { StandardPlus } from '../../Components/TicketTypes/StandardPlus'
import { Flexi } from '../../Components/TicketTypes/Flexi'
import flight_info from '../../Assets/flights_info'
import { SelectedAirlineContext } from '../../Contexts/SelectedAirlineContext'
import { TicketOptionModal } from '../../Components/TicketOptionModal/TicketOptionModal'
export const TicketOptions = () => {
    const {opt,updateOpt} =useContext(SelectedAirlineContext)
    const fprice=flight_info[opt].price;
    const [show,setShow] =  useState(false)
    const [ticketType,setTicketTypes]=useState('')
    const updateShow=()=>{
        setShow(!show)
    }

    const updateTicketType=(tval)=>{
        console.log('tval'+tval)
        setTicketTypes(tval);
        setShow(!show)
    }

  return (
    <div className='ticket-options'>
        {show?<TicketOptionModal fprice={fprice} ttype={ticketType} modalControl={updateShow}></TicketOptionModal>:null}
        <ChoosenFlight></ChoosenFlight>
        <div className='tp-selection'>
            <Standard price={fprice} handleTicketClick={updateTicketType}></Standard>
            <StandardPlus price={fprice} handleTicketClick={updateTicketType} ></StandardPlus>
            <Flexi price={fprice} handleTicketClick={updateTicketType}></Flexi>
        </div>
    </div>
  )
}
