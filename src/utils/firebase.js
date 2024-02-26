// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "csnotes-414410.firebaseapp.com",
  projectId: "csnotes-414410",
  storageBucket: "csnotes-414410.appspot.com",
  messagingSenderId: "706251395033",
  appId: "1:706251395033:web:70aba95350f912b5c693c8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
