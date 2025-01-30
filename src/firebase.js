import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBJJOGtAMSo6jaXfw40_c86YVLsxyiylZw",
  authDomain: "chat-bot-app-eb182.firebaseapp.com",
  projectId: "chat-bot-app-eb182",
  storageBucket: "chat-bot-app-eb182.appspot.com",
  messagingSenderId: "1027833788059",
  appId: "1:1027833788059:web:fd8b701262764e1fbe783e",
  measurementId: "G-K1NBVLYGNX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
