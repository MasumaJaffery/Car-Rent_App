import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import SignInForm from './components/Deviseforms/signin';
import SignUpForm from './components/Deviseforms/signup';
import Splash from './components/Shared/splash';
import AddItemForm from './components/forms/AddItemForm';
import Home from './components/Homepage/homepage';
import Sidebar from './components/Shared/sidebar';
import CarDetailsPage from './components/CarDetails/cardetailspage';
import ReserveAppointmentForm from './components/forms/ReserveAppointmentForm';
import { AuthProvider } from './components/Shared/AuthContext';

const App = () => {
  const [authenticated, setAuthenticated] = useState(false);

  const handleSignIn = () => {
    // Assume successful sign-in
    // You should implement your authentication logic here
    // For simplicity, let's assume the sign-in is successful
    setAuthenticated(true);
  };

  const handleSignUp = () => {
    // Assume successful sign-up
    // You should implement your sign-up logic here
    // For simplicity, let's assume the sign-up is successful
    setAuthenticated(true);
  };

  return (
    <AuthProvider>
      <Router>
        <div className="App flex">
          <Routes>
            <Route
              path="/login"
              element={<SignInForm onSignIn={handleSignIn} />}
            />
            <Route
              path="/signup"
              element={<SignUpForm onSignUp={handleSignUp} />}
            />
            <Route
              path="/Homepage"
              element={authenticated ? <Navigate to="/home" /> : <Splash />}
            />
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Splash />} />

            <Route
              path="/*"
              element={
                <>
                  <Sidebar />
                  <div className="content">
                    <Routes>
                      <Route index element={<Home />} />
                      <Route path="/add" element={<AddItemForm />} />
                      <Route
                        path="/reserve"
                        element={<ReserveAppointmentForm />}
                      />
                      <Route path="/car/:id" element={<CarDetailsPage />} />
                      {/* Add other routes as needed */}
                    </Routes>
                  </div>
                </>
              }
            />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};

export default App;
