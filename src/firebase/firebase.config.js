// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3MF3vJZ-K0gz_0P6r0qVIx99NDdVrB_s",
  authDomain: "assignment-10-ac88b.firebaseapp.com",
  projectId: "assignment-10-ac88b",
  storageBucket: "assignment-10-ac88b.appspot.com",
  messagingSenderId: "566920864881",
  appId: "1:566920864881:web:446e914554c06a966c27d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;