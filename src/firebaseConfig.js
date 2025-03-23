// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs78xDHgEThQh5fr4HKSEfVmSN01A0YK8",
  authDomain: "linkedin-clone-e4f16.firebaseapp.com",
  projectId: "linkedin-clone-e4f16",
  storageBucket: "linkedin-clone-e4f16.firebasestorage.app",
  messagingSenderId: "719028066915",
  appId: "1:719028066915:web:d723d1845b72e573113656",
  measurementId: "G-WNPMFMD1P2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);