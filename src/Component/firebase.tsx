import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD0aPbVii2nJNdk3Jdt67uOP6Br3qQUKtk",
  authDomain: "mvnh-6033f.firebaseapp.com",
  projectId: "mvnh-6033f",
  storageBucket: "mvnh-6033f.firebasestorage.app",
  messagingSenderId: "1085865833522",
  appId: "1:1085865833522:web:6d128ae40049d06b21f82b",
  measurementId: "G-P30BZS25EN",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
