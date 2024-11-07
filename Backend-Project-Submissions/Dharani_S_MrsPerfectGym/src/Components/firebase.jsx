// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// require("dotenv").config()
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.googleapi,
  authDomain: "mpmessager-23017.firebaseapp.com",
  projectId: "mpmessager-23017",
  storageBucket: "mpmessager-23017.firebasestorage.app",
  messagingSenderId: "888989765466",
  appId: "1:888989765466:web:f62d5b7d7eb3d3c1106d63",
  measurementId: "G-JMJ85WCG10"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
export {  db };