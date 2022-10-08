import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCX8JDVXB0WoazRNVficqkRfHwOOD9CIQ4",
  authDomain: "netflix-54605.firebaseapp.com",
  projectId: "netflix-54605",
  storageBucket: "netflix-54605.appspot.com",
  messagingSenderId: "370478059101",
  appId: "1:370478059101:web:3e17a4a885def772af07b4",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

