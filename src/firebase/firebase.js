
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA6cmYF9ci1AAQplrRHGqhXJ2vsCVgbdJI",
  authDomain: "tutiendapadelreact.firebaseapp.com",
  projectId: "tutiendapadelreact",
  storageBucket: "tutiendapadelreact.appspot.com",
  messagingSenderId: "56016419224",
  appId: "1:56016419224:web:630862a849bf13d47b13ed"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)