import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInForm from './components/Deviseforms/signin';
import SignUpForm from './components/Deviseforms/signup';
import Homepage from './components/Homepage/homepage';
import Splash from './components/Shared/splash';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/Homepage" element={<Homepage />} />
        <Route path="/" element={<Splash />} />
      </Routes>
    </Router>
  );
}

export default App;
