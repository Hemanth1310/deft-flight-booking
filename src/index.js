import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SelectedAirlineContextProvider from './Contexts/SelectedAirlineContext';
import CoookieConsentContextProvider from './Contexts/CookieConsentContext';
import MembershipStatusContextProvider from './Contexts/MembershipStatusContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <SelectedAirlineContextProvider>
       <CoookieConsentContextProvider>
            <MembershipStatusContextProvider>
                 <App />
            </MembershipStatusContextProvider>
       </CoookieConsentContextProvider>
    </SelectedAirlineContextProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
