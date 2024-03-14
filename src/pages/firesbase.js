// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { auth, storage } from './firebase';

// Your registration form component goes here
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl4f1VOhn8kmwVLh9aCGTb-_zxGuSEqk8",
  authDomain: "chatterbox-6ae7b.firebaseapp.com",
  projectId: "chatterbox-6ae7b",
  storageBucket: "chatterbox-6ae7b.appspot.com",
  messagingSenderId: "470474616529",
  appId: "1:470474616529:web:ff01318bb754733d4adff0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, storage };