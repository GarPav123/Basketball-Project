// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD022h1jcoRvXIfqkTPt59Q4qYex7ecmQc",
  authDomain: "csx-website.firebaseapp.com",
  projectId: "csx-website",
  storageBucket: "csx-website.appspot.com",
  messagingSenderId: "158784093794",
  appId: "1:158784093794:web:93bb0a57ea1dfec3141b3b",
  measurementId: "G-EE5KXQTRLF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
