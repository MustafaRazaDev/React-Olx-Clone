// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBkGnfHs9G3G2WGqr_qaQ9kfDLmf9yMqrQ",
  authDomain: "olxclone-mustafa.firebaseapp.com",
  projectId: "olxclone-mustafa",
  storageBucket: "olxclone-mustafa.appspot.com",
  messagingSenderId: "985470021773",
  appId: "1:985470021773:web:d7378a15ba5b71cb6d72c4",
  measurementId: "G-T7432V9MYJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export default db;
