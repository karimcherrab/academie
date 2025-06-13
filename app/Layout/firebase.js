// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwMMtp7S7gKqocjgkB2dAMrnUDYnV9Qqk",
  authDomain: "academy-df807.firebaseapp.com",
  projectId: "academy-df807",
  storageBucket: "academy-df807.appspot.com",
  messagingSenderId: "1082878956454",
  appId: "1:1082878956454:web:4c9f1c88ea29b8e7bb3567",
  measurementId: "G-V6RT4TN6FY",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
