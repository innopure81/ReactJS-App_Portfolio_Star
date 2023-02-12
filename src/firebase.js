// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBPZ_tpLzqyiCJY5F5kcw6KuqsUd1GARc",
    authDomain: "react-portfolio-dashboar-836df.firebaseapp.com",
    projectId: "react-portfolio-dashboar-836df",
    storageBucket: "react-portfolio-dashboar-836df.appspot.com",
    messagingSenderId: "141776537940",
    appId: "1:141776537940:web:73a78ef68ff2171ebee0c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export const signInWithGoogle = ()=> signInWithPopup(auth, provider);