import React, { useContext, useState } from 'react';
import './RegistrationForm.css';
import { ChoosenFlight } from '../../Components/ChoosenFlight/ChoosenFlight';
import { useNavigate } from 'react-router-dom';
import { CoookieConsentContext } from '../../Contexts/CookieConsentContext';
import relax from '../../Assets/relax.png';
import { BlueButton } from '../../Components/BlueButton/BlueButton';
import { Modal } from '../../Components/Modal/Modal';

export const RegistrationForm = () => {
    const [errors, setErrors] = useState({});
    const [show,setShow] = useState(false);
    const navigate = useNavigate();
    const { consentStatus, updateConsent } = useContext(CoookieConsentContext);
    const [cookieStatus, setCookieStatus] = useState(consentStatus);

    const [userDetails, setUserDetails] = useState({
        fname: '',
        lname: '',
        dob: '',
        email: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({ ...userDetails, [name]: value });
    };

    const handleCookie = () => {
        const newStatus = !cookieStatus;
        setCookieStatus(newStatus);
         // Update context on change
    };

    const validation = () => {
        const newErrors = {};
        if (!userDetails.fname) newErrors.fname = "First name is required";
        if (!userDetails.lname) newErrors.lname = "Last name is required";
        if (!userDetails.dob) newErrors.dob = "Date of birth is required";
        if (!userDetails.email) newErrors.email = "Email is required!";
        else if (!/\S+@\S+\.\S+/.test(userDetails.email)) newErrors.email = "Email is invalid";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const onSubmit = () => {

        if (validation()) {
            updateConsent(cookieStatus);
            navigate('/joinClub');
        }
    };

    const onModalClose=()=>{

        setShow(!show);

    }

    return (
        <div className="registration">
            {show?<Modal modalClose={onModalClose}></Modal>:null}
            <ChoosenFlight />
            <div className="registration-form">
                <div>
                    <h1>Please enter your details</h1>   
                    <div className="form-username">
                        <div className="input-container">
                            <label>First Name</label>
                            <input type="text" name="fname" value={userDetails.fname} onChange={handleInputChange} />
                            {errors.fname && <span className="error">{errors.fname}</span>}
                        </div>
                        <div className="input-container">
                            <label>Last Name</label>
                            <input type="text" name="lname" value={userDetails.lname} onChange={handleInputChange} />
                            {errors.lname && <span className="error">{errors.lname}</span>}
                        </div>     
                    </div>
                    <div className="input-container">
                        <label>Date Of Birth</label>
                        <input type="date" name="dob" value={userDetails.dob} onChange={handleInputChange} />
                        {errors.dob && <span className="error">{errors.dob}</span>}
                    </div> 
                    <div className="input-container">
                        <label>Email</label>
                        <input type="email" name="email" value={userDetails.email} onChange={handleInputChange} />
                        {errors.email && <span className="error">{errors.email}</span>}
                    </div>
                    <div className="cookie-checkbox">
                        <input type="checkbox" name="cookie" checked={cookieStatus} onChange={handleCookie} />
                        <p>
                            I do not wish to receive any information about offers related to my booking 
                            (e.g., upgrades, flight-related services, feedback). You can object to this usage with future effect at any time. 
                            <span className='blue-link' onClick={onModalClose}> Learn more</span>
                        </p>
                    </div>
                    <BlueButton name="Submit" clickHandler={onSubmit} />
                </div>
                <div>
                    {/* <img className="relax-img" src={relax} alt="Relaxing scene" /> */}
                    <div className='rg-hint-box'>
                        <div className="rg-persona-section">
                        <h2 className="rg-persona-subheading">Hint for Basic Information</h2>
                        <p><strong>Name:</strong> Emma Hart</p>
                        <p><strong>DOB:</strong> 30/01/1990</p>
                        <p><strong>Occupation:</strong> Freelance Designer</p>
                        <p><strong>Email:</strong> emma@abc.com</p>
                        <p><strong>Location:</strong> Berlin, Germany</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}
