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
import { UIDContext } from '../../Contexts/UIDContext.jsx';
import { OccuranceContext } from '../../Contexts/OccuranceContext.jsx';
export const Responses = () => {

    const {uid,handleUID} = useContext(UIDContext);
    const {occurance,handleOccurance} = useContext(OccuranceContext)
    const ospf = occurance==='fo'?'fod':'sod'
    const UserFeedBack = JSON.parse(localStorage.getItem('userFeedback') )
    const navigate=useNavigate()
    const {fp,cat}=useParams();
    const {consentStatus,updateConsent} = useContext(CoookieConsentContext)
    const {membershipStatus,updateMembership} = useContext(MembershipStatusContext)
    const {opt,updateOpt} = useContext(SelectedAirlineContext)
    const participant_data={
        'UID':`${uid}`,
        'RegistrationStatus':`${membershipStatus?'Registered-User':'Guest'}`,
        'CookieConsent':`${consentStatus?'rejected':'approved'}`,
        'Airline':`${flight_info[opt].airline}`,
        'BasicTicketPrice':`${flight_info[opt].price}`,
        'TicketCategory':`${cat==='0'?'Standard':
            cat==='30'?'Standard Plus':
            cat==='40'?'Flexi':null}`,
        'TotalSpendings':`${Number(flight_info[opt].price)+Number(cat)+10}`,
        'UserFeedBack':`${localStorage.getItem('userFeedback')}`
    }
    const onSumbit=()=>{
        console.log(participant_data)
        updateConsent(false)
        updateMembership(false)
        updateOpt('')
      
        // navigate('/')
        window.location.href = `https://cdp-ticketing-interface-study.web.app/SecondPart/2/${uid}/${ospf}`
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
       <h1> Thank You For the FeedBack</h1>

        <BlueButton name="Continue To next Part of the Study" clickHandler={onSumbit}></BlueButton>

    </div>
  )
}
