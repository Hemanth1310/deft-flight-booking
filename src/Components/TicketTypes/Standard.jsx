import React from 'react'
import './TicketTypes.css'
import { useNavigate } from 'react-router-dom'
export const Standard = (props) => {
    const price = Number(0)+Number(props.price)
    const navigate = useNavigate();

    const fp=props.price
    const cat='0'
    const handleClick=()=>{
        // navigate(`/checkout/${fp}/${cat}`)
        props.handleTicketClick('0')
    }
  return (
    <div className='ticket-types standard'>
    {/* {props.isRecommended?<div className='recommened'>Recommened</div>:null} */}
        <div className='tt-info'>
                    <div className='tt-option-name'>Standard</div>
                    <ul>
                        <li>Luaguage Upto 25 kg plus a Hand bag 7kg</li>
                        <li>No Refund on Cancellation</li>
                        <li>No Lost Baggage Insuarance </li>
                    </ul>
                    <div>
                        <p className='tt-price'>${price}<span>/Person</span></p>
                    
                    </div>
        </div>
        <div className='tt-action'>
                <button className='std-btn' onClick={handleClick} name="Continue">Continue</button>
        </div>
   
</div>
  )
}
