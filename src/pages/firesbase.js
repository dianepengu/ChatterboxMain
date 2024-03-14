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
  apiKey: "AIzaSyCnZYm_X5CJXBTPgzE4SbR8HHmWx7E34jw",
  authDomain: "chatapp-a41f4.firebaseapp.com",
  projectId: "chatapp-a41f4",
  storageBucket: "chatapp-a41f4.appspot.com",
  messagingSenderId: "704721002833",
  appId: "1:704721002833:web:7e636464d883df8565b370",
  measurementId: "G-07G2QWTR7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth();
const storage = firebase.storage();

export { auth, storage };