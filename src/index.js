import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDl4f1VOhn8kmwVLh9aCGTb-_zxGuSEqk8",
    authDomain: "chatterbox-6ae7b.firebaseapp.com",
    projectId: "chatterbox-6ae7b",
    storageBucket: "chatterbox-6ae7b.appspot.com",
    messagingSenderId: "470474616529",
    appId: "1:470474616529:web:ff01318bb754733d4adff0"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );