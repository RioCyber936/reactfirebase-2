import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

const firebaseConfig = {
    // apiKey: "AIzaSyB-vnzdIWVR4zGdJUfEbygfVuULGIR5rDI",
    // authDomain: "reat-firebase2.firebaseapp.com",
    // projectId: "reat-firebase2",
    // storageBucket: "reat-firebase2.appspot.com",
    // messagingSenderId: "580622482103",
    // appId: "1:580622482103:web:4078b2806148b1c7f82b32",
    // measurementId: "G-S7KHVR3S21"
    apiKey: "AIzaSyARsYAfdHrEW_cHjAW45B2nG8eyRRJmiLk",
    authDomain: "react-firebase-8755f.firebaseapp.com",
    projectId: "react-firebase-8755f",
    storageBucket: "react-firebase-8755f.appspot.com",
    messagingSenderId: "147514113364",
    appId: "1:147514113364:web:e55673cff76258750b1cc1",
    measurementId: "G-V5MX3KVSX3"
};

export const myFirebase = firebase.initializeApp(firebaseConfig)
const baseDb = myFirebase.firestore()
export const db = baseDb