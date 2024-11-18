import React from 'react'
import './TicketOptionModal.css'
import { useNavigate } from 'react-router-dom'
export const TicketOptionModal = (props) => {
    const navigate = useNavigate()
    const fp=props.fprice;
    const ttype=props.ttype;
    const cat1='0'
    const cat2='30'
    const cat3='40'
    const handleStandardClick=()=>{
        navigate(`/checkout/${fp}/${cat1}`)
    }
    const handleStandardPlusClick=()=>{
        navigate(`/checkout/${fp}/${cat2}`)
    }
    const handleFlexiClick=()=>{
        navigate(`/checkout/${fp}/${cat3}`)
    }
  return (
    <div className='ttp-modal'>
    <div className='ttp-modal-content'>
        <h1>Do you want better packages</h1>
        <table>
            <tr>
                <th>Benifits</th>
                <th>Standard Plus</th>
                <th>Flexi</th>
            </tr>
            <tr>
                <td>Baggage allowance</td>
                <td>23kg + 7kg handbag</td>
                <td>23kg + 7kg handbag</td>
            </tr>
            <tr>
                <td>Change of date</td>
                <td>nil for upto 3 days from booking</td>
                <td>nil</td>
            </tr>
            <tr>
                <td>Charges</td>
                <td>standard ticket + 30 euros</td>
                <td>standard ticket + 40 euros</td>
            </tr>
        </table>
        {ttype==='0'?
            <div className='ttp-modal-commit'>
                
                <button className="std-btn" onClick={handleStandardClick}>Continue with Standard</button>
                <button className="stdplus-btn" onClick={handleStandardPlusClick}>Change to Standard Plus</button>
                <button className="flexi-btn" onClick={handleFlexiClick}>Change to flexi</button>    
            </div>:ttype==='30'?<div className='ttp-modal-commit'>

                <button className="stdplus-btn" onClick={handleStandardPlusClick}>Continue with Standard Plus</button>
                <button className="flexi-btn" onClick={handleFlexiClick}>Change to flexi</button>    
            </div> 
        :null}
    </div>
    
  </div>
  )
}
