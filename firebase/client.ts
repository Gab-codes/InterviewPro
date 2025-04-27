import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQN1YpwZcDX5oG__PQxbgAZEmXrpe6l9g",
  authDomain: "interviewpro-661ce.firebaseapp.com",
  projectId: "interviewpro-661ce",
  storageBucket: "interviewpro-661ce.firebasestorage.app",
  messagingSenderId: "889609372592",
  appId: "1:889609372592:web:aa1277e512fb9c1302cc75",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
