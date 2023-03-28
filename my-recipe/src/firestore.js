// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXuYjhTsBg6eAPh2PssxnA8JYixcfZOGo",
  authDomain: "aicha-like.firebaseapp.com",
  projectId: "aicha-like",
  storageBucket: "aicha-like.appspot.com",
  messagingSenderId: "82541799800",
  appId: "1:82541799800:web:6ce8d88dcffbf43d2e408d",
  measurementId: "G-N0RGYVJ831"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export { firebaseConfig };