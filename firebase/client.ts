// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC5KbDh2PahLSjkEJsvCrGUzCmJUyVlWA0",
  authDomain: "horizon-e476d.firebaseapp.com",
  projectId: "horizon-e476d",
  storageBucket: "horizon-e476d.firebasestorage.app",
  messagingSenderId: "298186863459",
  appId: "1:298186863459:web:cb2f1be27568697f2f1956",
  measurementId: "G-E2KNRJ5DT2"
};
// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);
// Initialize Firebase

export const auth = getAuth(app);
export const db = getFirestore(app);
const analytics = getAnalytics(app);