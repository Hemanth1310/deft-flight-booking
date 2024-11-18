import React from 'react'
import './AirlineOption.css'
import flight_info from '../../Assets/flights_info'
import { BlueButton } from '../BlueButton/BlueButton'
export const AirlineOption = (props) => {

    const flight_info=props.finfo;
    const tag=props.tag;

    const onSelection=()=>{
        props.handleFlight();
    }
  return (
    <div className={`airlineOption ${props.isRecommended?'ap-Recommended':''}`}>
                <div className='ap-flight-details'>
                    <div className='ap-pref'>
                        <div className='ap-airline-name'>{flight_info.airline}</div>
                        <div className={`ap-tag ${tag==='Best-Value'?'tag-yellow':tag==='Cheapest'?'tag-green':tag==='Fastest'?'tag-red':null}`}>{tag}</div>

                    </div>
                    <div className='ap-timedetails'>
                        <div className='ap-time'>{flight_info.deptime}hr</div>
                        <p className='ap-date'>Fri, 14 Feb</p>
                    </div>
                
                    <div className='flt-time'>
                    <div className='linestrike-airline'></div>
                        <div className='travtime'>{flight_info.travtime} hrs</div>
                        
                    </div>
                    <div className='ap-timedetails'>
                        <div className='ap-time'>{flight_info.arrtime}hr</div>
                        <p className='ap-date'>Fri, 14 Feb</p>
                    </div>
                    <div>
                        <div className='tkt-price'>${flight_info.price}</div>
                        <p className='pperson ap-fade'>/Per Person </p>
                    </div>
                    
                  
                    <BlueButton name='Book a flight' clickHandler={onSelection} ></BlueButton>
        
                </div>
                <div>
                    {props.isRecommended? <div className='ap-recommendation'>
                        <p>{`Recommended `} </p>
                    </div>:null}
                   
                </div>
    </div>
  )
}
