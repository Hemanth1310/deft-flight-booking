import React, { useContext, useEffect,useState } from 'react'
import './Home.css'
import { RouteInfo } from '../../Components/RouteInfo/RouteInfo'
import { BlueButton } from '../../Components/BlueButton/BlueButton'
import { useNavigate, useParams } from 'react-router-dom'
import { UIDContext } from '../../Contexts/UIDContext'
import { OccuranceContext } from '../../Contexts/OccuranceContext'
import { Persona } from '../../Components/Persona/Persona'
import { ref, get,set, push } from "firebase/database";
import { database } from '../../firebase.js';

export const Home = () => {
    const navigate = useNavigate();
    const {ospf}=useParams();
    const [pid,setPid] = useState();
    const {uid,handleUID} = useContext(UIDContext);
    const {occurance,handleOccurance} = useContext(OccuranceContext)

    const onNext=()=>{
        navigate('/airlineSelection');
    }

    const gentrateUserID = async () =>{
      
      const datasRef =ref(database,'participants-data-deft');
      const snapshot = await get(datasRef);

      try{if(snapshot.exists()){
          const children = snapshot.val(); // Get the raw data as an object
          const uid = Object.keys(children).length; 
          console.log('newuid'+ uid)
          setPid('p'+uid) 
      }else{
          console.log('No user found')
          setPid('p'+'0') 
      }}catch(e){
          console.log('Error occured. No connection to DB'+ e );
      }
    }

    useEffect(()=>{
      gentrateUserID()
      localStorage.setItem('deft-cookieStatus','')
      localStorage.setItem('deft-airlineOpt','')
      localStorage.setItem('deft-membershipStatus','');
      handleOccurance(ospf)
      handleUID(pid)
      

    },[])
  return (
    <div className='home'>
        <div className='welcome'>
        <h1>Welcome to our flight Booking Portal</h1>
        <p style={{fontSize:'18px',fontWeight:'600'}}>Use the persona details provided to guide your decisions while performing the task. </p>
        <p style={{fontSize:'18px',fontWeight:'600'}}>Act as if you are this persona, keeping their preferences and needs in mind to complete the task effectively.</p>
        </div>
        <Persona></Persona>
     
        {/* <RouteInfo></RouteInfo> */}
        <BlueButton name="Continue to Book >" clickHandler={onNext}></BlueButton>
    </div>
  )
}
