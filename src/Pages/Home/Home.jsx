import React, { useContext, useEffect } from 'react'
import './Home.css'
import { RouteInfo } from '../../Components/RouteInfo/RouteInfo'
import { BlueButton } from '../../Components/BlueButton/BlueButton'
import { useNavigate, useParams } from 'react-router-dom'
import { UIDContext } from '../../Contexts/UIDContext'
import { OccuranceContext } from '../../Contexts/OccuranceContext'

export const Home = () => {
    const navigate = useNavigate();
    const {pid,ospf}=useParams();

    const {uid,handleUID} = useContext(UIDContext);
    const {occurance,handleOccurance} = useContext(OccuranceContext)
    
    const onNext=()=>{
        navigate('/airlineSelection');
    }
    useEffect(()=>{
      localStorage.setItem('deft-cookieStatus','')
      localStorage.setItem('deft-airlineOpt','')
      localStorage.setItem('deft-membershipStatus','');
      handleOccurance(ospf)
      handleUID(pid)

    },[])
  return (
    <div className='home'>
        <div className='welcome'>
        <h1>Welcome to our flight Booking Portal (Study-B)</h1>
        <p>Please Continue to Book your next flight</p>
        </div>
     
        <RouteInfo></RouteInfo>
        <BlueButton name="Continue to Book >" clickHandler={onNext}></BlueButton>
    </div>
  )
}
