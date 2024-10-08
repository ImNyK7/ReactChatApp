import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "reactchatapp-dfa45.firebaseapp.com",
  projectId: "reactchatapp-dfa45",
  storageBucket: "reactchatapp-dfa45.appspot.com",
  messagingSenderId: "324312767094",
  appId: "1:324312767094:web:3a63aac17982cf1c951d57"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()