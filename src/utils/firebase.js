// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA87GbUrsgy2uYXcq5Qw6SaPuy-nrXbxec",
  authDomain: "netflix-gpt-f13d4.firebaseapp.com",
  projectId: "netflix-gpt-f13d4",
  storageBucket: "netflix-gpt-f13d4.appspot.com",
  messagingSenderId: "825763475672",
  appId: "1:825763475672:web:50762c8566f8ee53c4e7ad",
  measurementId: "G-FZ08BN4PM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
