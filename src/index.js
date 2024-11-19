import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import SelectedAirlineContextProvider from './Contexts/SelectedAirlineContext';
import CoookieConsentContextProvider from './Contexts/CookieConsentContext';
import MembershipStatusContextProvider from './Contexts/MembershipStatusContext';
import UIDContextProvider, { UIDContext } from './Contexts/UIDContext';
import OccuranceContextProvider, { OccuranceContext } from './Contexts/OccuranceContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UIDContextProvider>
        <OccuranceContextProvider>
            <SelectedAirlineContextProvider>
                <CoookieConsentContextProvider>
                        <MembershipStatusContextProvider>
                            <App />
                        </MembershipStatusContextProvider>
                </CoookieConsentContextProvider>
            </SelectedAirlineContextProvider>
        </OccuranceContextProvider>
    </UIDContextProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
