// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLOG-YZbxbFRDijCA2sSieDvocCZMZfF8",
  authDomain: "auth-test-abfc8.firebaseapp.com",
  projectId: "auth-test-abfc8",
  storageBucket: "auth-test-abfc8.appspot.com",
  messagingSenderId: "730673243648",
  appId: "1:730673243648:web:84c46ffaf66190bd319ae5",
  measurementId: "G-DKGSL9EP7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export { firebaseConfig };