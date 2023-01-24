// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoU_dHPtFqB1ewuygrBXQL9-Id2SOn4KM",
  authDomain: "react-48250.firebaseapp.com",
  projectId: "react-48250",
  storageBucket: "react-48250.appspot.com",
  messagingSenderId: "205566745358",
  appId: "1:205566745358:web:937e647cf6fddc7b1ad55f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);