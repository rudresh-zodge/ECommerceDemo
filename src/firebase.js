import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCXhYDAhSKfE2S5jgogzJMK1k1NxiZcNt4",
  authDomain: "clone-3f841.firebaseapp.com",
  databaseURL: "https://clone-3f841-default-rtdb.firebaseio.com",
  projectId: "clone-3f841",
  storageBucket: "clone-3f841.appspot.com",
  messagingSenderId: "818151807063",
  appId: "1:818151807063:web:78593df0e045c1fe05eb12",
  measurementId: "G-JXWB61ET6T",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(); //  real  time database
const auth = getAuth(firebaseApp); //  used to handle signing in

//export default auth;
export { db, auth };
