import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDS9hvd_ILWa8T13Rn066J_K5YS4CLqNfo",
  authDomain: "mvnh-ee28c.firebaseapp.com",
  projectId: "mvnh-ee28c",
  storageBucket: "mvnh-ee28c.firebasestorage.app",
  messagingSenderId: "532062565851",
  appId: "1:532062565851:web:fdf38f3733ae288507a3fe",
  measurementId: "G-Y9LJRJL956",
};

const app = initializeApp(firebaseConfig);
app;
export const auth = getAuth();
