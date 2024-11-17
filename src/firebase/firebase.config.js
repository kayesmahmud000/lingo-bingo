// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6RZbeMrZH6p_VscT_QY__6uVE723X_E8",
  authDomain: "lingo-bingo-d09a2.firebaseapp.com",
  projectId: "lingo-bingo-d09a2",
  storageBucket: "lingo-bingo-d09a2.firebasestorage.app",
  messagingSenderId: "1061555121851",
  appId: "1:1061555121851:web:afe53749a3cc4655f4c39e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default (app)