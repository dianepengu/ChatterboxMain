// Register.js
import React, { useState } from 'react';
import firebase from 'firebase/app'; // Import Firebase app 
import 'firebase/auth'; // Import authentication 

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      await firebase.auth().createUserWithEmailAndPassword(email, password);
      
      window.location.href = '/home';// papuntang home page 
    } catch (error) {
      console.error('Registration error:', error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleRegister}>Register</button>
      <p>Already have an account? <a href="/">Login</a></p>
    </div>
  );
}

export default Register;
