import React from 'react'
import './Modal.css'
export const Modal = (props) => {
  return (
    <div className='modal'>
    <div className='modal-content'>
        <ul>
            <li>I subscribe to newsletters containing personalised offers and information about Airline products and services. </li>
            <li>At any time, I can unsubscribe via the footer of each newsletter if I no longer wish to receive these emails.</li>
            <li>I want to subscribe to personalised offers via email, social media, and advertising partners. I understand that </li>
            <li>I can withdraw my consent or unsubscribe at any time.</li>
        </ul>
        <div className='modal-commit'>
            <button onClick={props.modalClose}>close</button>
        </div>
    </div>
    
  </div>
  )
}
