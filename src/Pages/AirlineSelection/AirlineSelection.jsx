import React, { useContext } from 'react'
import './AirlineSelection.css'
import flight_info from '../../Assets/flights_info'
import { RouteInfo } from '../../Components/RouteInfo/RouteInfo'
import { DateSelection } from '../../Components/DateSelection/DateSelection'
import { AirlineOption } from '../../Components/AirlineOption/AirlineOption'
import { SelectedAirlineContext } from '../../Contexts/SelectedAirlineContext'
import { useNavigate } from 'react-router-dom'
export const AirlineSelection = () => {
    const {opt,updateOpt}=useContext(SelectedAirlineContext);
    const navigation = useNavigate()
    const flightSelection=(optval)=>{
        updateOpt(optval);
        navigation('/registration')
    }
  return (
    <div className="airlineSelection">
        <RouteInfo></RouteInfo>
        <DateSelection></DateSelection>
       
            <AirlineOption finfo={flight_info[2]} isRecommended={true} tag='Best-Value' handleFlight={()=>{flightSelection(2)}}></AirlineOption>
            <AirlineOption finfo={flight_info[0]} isRecommended={false} tag='Fastest' handleFlight={()=>{flightSelection(0)}}></AirlineOption>
            <AirlineOption finfo={flight_info[1]} isRecommended={false} tag='Cheapest' handleFlight={()=>{flightSelection(1)}}></AirlineOption>

        
    </div>
  )
}
