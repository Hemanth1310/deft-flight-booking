// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCT2YrU67x3HJ9WKVoj14rHEBhTApPQGIU",
  authDomain: "deft-flight-booking-app.firebaseapp.com",
  databaseURL: "https://deft-flight-booking-app-default-rtdb.firebaseio.com",
  projectId: "deft-flight-booking-app",
  storageBucket: "deft-flight-booking-app.firebasestorage.app",
  messagingSenderId: "161846496889",
  appId: "1:161846496889:web:5a01ded7a8c5cd2d3e4ea8",
  measurementId: "G-L98CV2HP3Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

 // Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);