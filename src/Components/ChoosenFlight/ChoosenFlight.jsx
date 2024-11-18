import React, { useContext } from 'react'
import { SelectedAirlineContext } from '../../Contexts/SelectedAirlineContext'
import flight_info from '../../Assets/flights_info'
import './ChoosenFlight.css'
export const ChoosenFlight = () => {
    const {opt,updateOpt} = useContext(SelectedAirlineContext)

  return (
    <div className='choosenFlight'>
         <div className='cf-airline-name'>{flight_info[opt].airline}</div>
        <div className='cf-dep'>
            <div className='cf-time'>{flight_info[opt].deptime}hr</div>
            <p className='cf-date'>Fri, 14 Feb</p>
        </div>
    
        <div className='cf-flt-time'>
        <div className='cf-linestrike-airline'></div>
            <div className='cf-travtime'>{flight_info[opt].travtime} hrs</div>
            
        </div>
        <div className='cf-dep'>
            <div className='cf-time'>{flight_info[opt].arrtime}hr</div>
            <p className='cf-date'>Fri, 14 Feb</p>
        </div>
        <div>
            <div className='cf-tkt-price'>${flight_info[opt].price}</div>
            <p className='cf-pperson cf-fade'>/Per Person </p>
        </div>
    </div>
  )
}
