// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBY1GqPkYk84-VhFB41RFj9_djF--8EG4Q",
  authDomain: "ibiminabuy.firebaseapp.com",
  projectId: "ibiminabuy",
  storageBucket: "ibiminabuy.appspot.com",
  messagingSenderId: "585857786967",
  appId: "1:585857786967:web:103fff97b7014c1aaeaf12"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore()
const storage = getStorage()
export {auth,db,storage}
