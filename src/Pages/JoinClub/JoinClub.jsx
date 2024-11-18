import React, { useContext } from 'react'
import { BlueButton } from '../../Components/BlueButton/BlueButton'
import { MembershipStatusContext } from '../../Contexts/MembershipStatusContext'
import { useNavigate } from 'react-router-dom'
import './JoinClub.css'
export const JoinClub = () => {

    const {membershipStatus,updateMembership} = useContext(MembershipStatusContext)
    const navigate= useNavigate()
    const onJoin=()=>{
        updateMembership(true)
        navigate('/ticketOptions');
    }
    const skipJoin=()=>{
        updateMembership(false)
        navigate('/ticketOptions')
    }

  return (
    <div className="joinClub">
        <div className='jc-container'>
            <div className='jc-info-banner'>
                <h1>Why Join AirClub?</h1>
                <div>
                <p>Join airclub  and earn miles on flights with 5 partnered airlines</p>
                <p>Be considered for upgrade, special on-boarding services and many more discounts</p>
                </div>
                <BlueButton name='Join Club' clickHandler={onJoin}></BlueButton>
            </div>
            <div className='jc-guest'>
                <span onClick={skipJoin}>Continue as a guest</span>
            </div>
        </div>
    </div>
  )
}
