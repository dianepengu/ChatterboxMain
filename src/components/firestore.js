import firebase from '@firebase/app';
import 'firebase/auth';
import 'firebase/database';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDl4f1VOhn8kmwVLh9aCGTb-_zxGuSEqk8",
    authDomain: "chatterbox-6ae7b.firebaseapp.com",
    projectId: "chatterbox-6ae7b",
    storageBucket: "chatterbox-6ae7b.appspot.com",
    messagingSenderId: "470474616529",
    appId: "1:470474616529:web:ff01318bb754733d4adff0"
  };
  firebase.initializeApp(firebaseConfig);
  
  
  export default firebase;
