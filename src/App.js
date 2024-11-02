// src/index.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import DestinationDetails from './DestinationDetails';
import LoginPage from './LoginPage'; // Import the LoginPage component
import SignInPage from './SignInPage'; // Import the SignInPage component

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/destination/:id" element={<DestinationDetails />} />
      <Route path="/login" element={<LoginPage />} />  {/* Route for LoginPage */}
      <Route path="/signin" element={<SignInPage />} /> {/* Route for SignInPage */}
    </Routes>
  );
};

export default App;
