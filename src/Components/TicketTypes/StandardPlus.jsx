import React from 'react'
import './TicketTypes.css'
import { useNavigate } from 'react-router-dom'
export const StandardPlus = (props) => {
    const price = Number(30)+Number(props.price)
    const navigate = useNavigate();

    const fp=props.price
    const cat='30'
    const handleClick=()=>{
        // navigate(`/checkout/${fp}/${cat}`)
        props.handleTicketClick('30')
    }
  return (
    <div className='ticket-types Standardplus'>
         <div className='tt-info'>
                <div className='tt-recommended'>Recommended</div>
                <div className='tt-option-name'>Standard Plus</div>
                <ul>
                    <li>Luaguage Upto 25 kg plus a Hand bag 7kg</li>
                    <li>Partial Refund on Cancellation</li>
                    <li>Lost Baggage Insuarance Included</li>
                </ul>
                <div>
                    <p className='tt-price'>${price}<span>/Person</span></p>
                    {/* <p className='tt-conditions'>*Standard ticket price plus tax</p> */}
                </div>
        </div>
        <div className='tt-action'>
                <button className='stdplus-btn' onClick={handleClick} name="Continue">Continue</button>
        </div>
    </div>
  )
}
