import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD41wfGccm__cUaXkFas-uGH0O8eursuE4",
    authDomain: "doctor-website-c5d1d.firebaseapp.com",
    projectId: "doctor-website-c5d1d",
    storageBucket: "doctor-website-c5d1d.firebasestorage.app",
    messagingSenderId: "198059748374",
    appId: "1:198059748374:web:7f42d6870e3f5321239937",
    measurementId: "G-CGHL6SXXWW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
