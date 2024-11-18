import React from 'react'
import './Responses.css'
import { ref, set, push } from "firebase/database";
import { database } from '../../firebase.js';
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { useState } from 'react'
import { CoookieConsentContext } from '../../Contexts/CookieConsentContext'
import { MembershipStatusContext } from '../../Contexts/MembershipStatusContext'
import { SelectedAirlineContext } from '../../Contexts/SelectedAirlineContext'
import flight_info from '../../Assets/flights_info'
import { BlueButton } from '../../Components/BlueButton/BlueButton'
import { useEffect } from 'react'
export const Responses = () => {
    const navigate=useNavigate()
    const {fp,cat}=useParams();
    const {consentStatus,updateConsent} = useContext(CoookieConsentContext)
    const {membershipStatus,updateMembership} = useContext(MembershipStatusContext)
    const {opt,updateOpt} = useContext(SelectedAirlineContext)
    const participant_data={
        'RegistrationStatus':`${membershipStatus?'Registred-User':'Guest'}`,
        'CookieConsent':`${consentStatus?'rejected':'approved'}`,
        'Airline':`${flight_info[opt].airline}`,
        'BasicTicketPrice':`${flight_info[opt].price}`,
        'TicketCategory':`${cat==='0'?'Standard':
            cat==='30'?'Standard Plus':
            cat==='40'?'Flexi':null}`,
        'TotalSpendings':`${Number(flight_info[opt].price)+Number(cat)+10}`    
    }
    const onSumbit=()=>{
        console.log(participant_data)
        updateConsent(false)
        updateMembership(false)
        updateOpt('')
      
        // navigate('/')
        window.location.href = 'https://cdp-ticketing-interface-study.web.app/SecondPart/2'
    }

    // Function to add data
const addBooking = async () => {
    const bookingsRef = ref(database, 'participants-data-deft'); // Reference to the 'bookings' node
    push(bookingsRef, participant_data)
      .then(() => {
        console.log("Data pushed successfully");
      })
      .catch((error) => {
        console.error("Error pushing data: ", error);
      });
  };

  useEffect(()=>{
    addBooking();
  },[])

    return (
    <div className='responses'>
       <h1> Responses</h1>

        <div className='res-listing'>
                <p>Registration Status:</p>
                {membershipStatus?<span>Registred-User</span>:<span>Guest</span>}
        </div>
        <div className='res-listing'>
                <p>Cookie Consent:</p>
                <span>{consentStatus?'rejected':'approved'}</span>
        </div>

        <div className='res-listing'>
                <p>Airline:</p>
                <span>{flight_info[opt].airline}</span>
        </div>
        <div className='res-listing'>
                <p>Basic Ticket Price:</p>
                <span>{flight_info[opt].price}</span>
        </div>
        <div className='res-listing'>
                <p>Ticket Category:</p>
                
                {cat==='0'?<span>Standard</span>:
                cat==='30'?<span>Standard Plus</span>:
                cat==='40'?<span>Flexi</span>:null}
        </div>
        <div className='res-listing'>
                <p>Total Spendings:</p>
                
               <span>{Number(flight_info[opt].price)+Number(cat)+10}</span>
        </div>

        <BlueButton name="Next Participant" clickHandler={onSumbit}></BlueButton>

    </div>
  )
}
