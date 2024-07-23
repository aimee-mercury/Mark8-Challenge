// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAUZ4Z4TLdrZaeeDs9C5_wmsu3xsXi6s2s",
  authDomain: "mark8-4d247.firebaseapp.com",
  projectId: "mark8-4d247",
  storageBucket: "mark8-4d247.appspot.com",
  messagingSenderId: "240388942355",
  appId: "1:240388942355:web:6a58367c03e44195f22de6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };