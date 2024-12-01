import React,{useEffect} from 'react'
import './Checkout.css'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ChoosenFlight } from '../../Components/ChoosenFlight/ChoosenFlight'
import { BlueButton } from '../../Components/BlueButton/BlueButton'

export const Checkout = () => {
    const {fp,cat}= useParams()

    const initPrice = Number(fp);
    const finPrice = Number(fp)+Number(cat)+10
    const navigate=useNavigate()

    const onAnalysis=()=>{
        // navigate(`/analysis/${fp}/${cat}`)
        navigate(`/questionnaire/${fp}/${cat}`)
    }

    useEffect(() => {
      localStorage.setItem('deft-cookieStatus',false)
    }, [])
    
  return (
    <div className='checkout'>
       <ChoosenFlight></ChoosenFlight>
        <div className='ck-price-listing'>
            <div className='ck-listing'>
                <p>Standard Ticket Price:</p>
                <span>{initPrice}</span>
            </div>
            <div className='ck-listing'>
                <p>Special Upgrade Cost:</p>
                <span>{cat}</span>
            </div>
            <div className='ck-listing'>
                <p>Tax and Others:</p>
                <span>10</span>
                
            </div>
            <div className='ck-line-strike'></div>
            <div className='ck-listing total'>
                <p>Total:</p>
                <span>{finPrice}</span>
                
            </div>
        </div>
        <div className='ck-conclusion'>
            <h1>Booking Successful Thank You!!!</h1>
        </div>
        <BlueButton name='Go to Feedback' clickHandler={onAnalysis}></BlueButton>
    </div>
  )
}
