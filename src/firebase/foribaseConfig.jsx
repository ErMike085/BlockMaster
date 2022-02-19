import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCnMSuQymTTb4WEC4iOI4hTOfhLuQBfZwg",
  authDomain: "blockmaster-80d4e.firebaseapp.com",
  projectId: "blockmaster-80d4e",
  storageBucket: "blockmaster-80d4e.appspot.com",
  messagingSenderId: "98526285230",
  appId: "1:98526285230:web:09e2148ef78d82fdb28c3f",
};

const google = new GoogleAuthProvider();
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { google, app, db };
