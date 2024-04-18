// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "gallery-32517.firebaseapp.com",
  projectId: "gallery-32517",
  storageBucket: "gallery-32517.appspot.com",
  messagingSenderId: "616231267939",
  appId: "1:616231267939:web:4d2f036d0dab06dd5d1256"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);