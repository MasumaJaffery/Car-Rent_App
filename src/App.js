import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInForm from './components/Deviseforms/signin';
import SignUpForm from './components/Deviseforms/signup';
import Splash from './components/Shared/splash';
import AddItemForm from './components/forms/AddItemForm';
import Home from './components/Homepage/homepage';
import Sidebar from './components/Shared/sidebar';
import CarDetailsPage from './components/CarDetails/cardetailspage';
import ReserveAppointmentForm from './components/forms/ReserveAppointmentForm';

const App = () => (
  <Router>
    <div className="App flex">
      <Routes>
        <Route path="/login" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/Homepage" element={<Home />} />
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
                  <Route path="/reserve" element={<ReserveAppointmentForm />} />
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
);

export default App;
