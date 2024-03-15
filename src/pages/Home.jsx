// Home.js
import React, { useState } from 'react';
import firebase from 'firebase/app'; // Import Firebase app module
import 'firebase/auth'; // Import authentication module

function Home() {
  const handleLogout = async () => {
    try {
      await firebase.auth().signOut();
      
      window.location.href = '/';// login papuntang logout
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Home;
