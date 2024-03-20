// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBFUJGk2rYgoM5vbxRpm2lDXxfNXBBa8Mk",
  authDomain: "fortress-43e68.firebaseapp.com",
  projectId: "fortress-43e68",
  storageBucket: "fortress-43e68.appspot.com",
  messagingSenderId: "783045781268",
  appId: "1:783045781268:web:7f632df32e2bffa18a4401",
  measurementId: "G-93R8NCDT7Z",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
