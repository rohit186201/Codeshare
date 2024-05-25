// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFmS_BCiXcYE3Q_z0AIm7VjHgg2f_5Ieg",
  authDomain: "codeshare-18692.firebaseapp.com",
  projectId: "codeshare-18692",
  storageBucket: "codeshare-18692.appspot.com",
  messagingSenderId: "782941725154",
  appId: "1:782941725154:web:fcebc202ed7c7469f8d9bb",
  measurementId: "G-9JPDH0VY89"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const provider =new GoogleAuthProvider()