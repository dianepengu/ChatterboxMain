import firebase from '.pages/firebase';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { firebase } from './firebase';
import Login from './Login';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [avatar, setAvatar] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { user } = await firebase.auth.createUserWithEmailAndPassword(email, password);

      if (avatar) {
        const uploadTask = await firebase.storage.ref(`avatars/${user.uid}`).put(avatar);
        const avatarURL = await uploadTask.ref.getDownloadURL();
        await user.updateProfile({
          displayName,
          photoURL: avatarURL,
        });
        await firebase.firestore.collection('users').doc(user.uid).set({
          displayName,
          avatarURL,
        });
      } else {
        await user.updateProfile({
          displayName,
        });
        await firebase.firestore.collection('users').doc(user.uid).set({
          displayName,
        });
      }

      setEmail('');
      setPassword('');
      setDisplayName('');
      setAvatar(null);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="register">
      <h2>Register</h2>
      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Display Name"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setAvatar(e.target.files[0])}
        />
        <button type="submit">Register</button>
      </form>
      <p>
        Already have an account? <Link to="/pages/login">Log in</Link>
      </p>
    </div>
  );
};

export default Register;