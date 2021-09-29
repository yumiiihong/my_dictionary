// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYP82o0LZPt_xaGuRoiOxO15X8bOKbuQY",
  authDomain: "mydictionary-9f487.firebaseapp.com",
  projectId: "mydictionary-9f487",
  storageBucket: "mydictionary-9f487.appspot.com",
  messagingSenderId: "957254102633",
  appId: "1:957254102633:web:5f869d6ff95fa80f3f7cf8",
  measurementId: "G-D126R28EWQ"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();