// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwVcoZxbGnBqD9QAeQ7LMXrY5BD47pzx0",
  authDomain: "auth-route-practice-fb883.firebaseapp.com",
  projectId: "auth-route-practice-fb883",
  storageBucket: "auth-route-practice-fb883.firebasestorage.app",
  messagingSenderId: "643272894491",
  appId: "1:643272894491:web:becd4e0cc6378747aaf0be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app) ;

export default auth
