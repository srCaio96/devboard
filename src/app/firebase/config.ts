import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAwbZRHoEhPBkbk8mDyrm2lHpSCGAwz0hY",
    authDomain: "projects-469f4.firebaseapp.com",
    projectId: "projects-469f4",
    storageBucket: "projects-469f4.firebasestorage.app",
    messagingSenderId: "697813639007",
    appId: "1:697813639007:web:4392387dbe73da04f6a0ea",
    measurementId: "G-JDD3CXGKWM"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);