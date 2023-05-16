// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKDPh-KNfN0r6czP6h6ODFP0Cdr78VRj0",
  authDomain: "ema-john-firebase-auth-95d54.firebaseapp.com",
  projectId: "ema-john-firebase-auth-95d54",
  storageBucket: "ema-john-firebase-auth-95d54.appspot.com",
  messagingSenderId: "913443288186",
  appId: "1:913443288186:web:9cb6ed227c9d1545f537c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;