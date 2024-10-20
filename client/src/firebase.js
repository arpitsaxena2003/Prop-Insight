// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-2752c.firebaseapp.com",
  projectId: "mern-estate-2752c",
  storageBucket: "mern-estate-2752c.appspot.com",
  messagingSenderId: "319469632661",
  appId: "1:319469632661:web:51bcfae257a6dfd64d6f9c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);