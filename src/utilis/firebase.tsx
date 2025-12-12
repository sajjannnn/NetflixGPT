// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzZtDxJS8hhHAkq1uELlLcc3KiWawIWCo",
  authDomain: "netflixgpt-7dbf7.firebaseapp.com",
  projectId: "netflixgpt-7dbf7",
  storageBucket: "netflixgpt-7dbf7.firebasestorage.app",
  messagingSenderId: "1038805579106",
  appId: "1:1038805579106:web:76f6b3a691e4058d64e83b",
  measurementId: "G-VBERSHNKXX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);