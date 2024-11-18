import React from 'react'
import './Modal.css'
export const Modal = (props) => {
  return (
    <div className='modal'>
    <div className='modal-content'>
        <ul>
            <li>I subscribe to newsletters with personalised offers and information about KLM products and services. </li>
            <li>At any time, I can unsubscribe in the footer of each of the newsletter if I no longer wish to receive these e-mails.</li>
            <li>I want to subscribe to personalised offers via e-mail, social media and advertising partners. ​Of course, </li>
            <li>I can always withdraw my consent or unsubscribe.</li>
        </ul>
        <div className='modal-commit'>
            <button onClick={props.modalClose}>close</button>
        </div>
    </div>
    
  </div>
  )
}
