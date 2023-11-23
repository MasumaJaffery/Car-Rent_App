import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignInForm from './components/Deviseforms/signin';
import SignUpForm from './components/Deviseforms/signup';
import Homepage from './components/Homepage/homepage';
import Splash from './components/Shared/splash';
import Additempage from './components/Additempage/Additemcomponent';
import CarDetailsPage from './components/CarDetails/cardetailspage';
import Reservepage from './components/Reservepage/reservecomponent';
import MyReservepage from './components/MyReservations/myreservepage';

const App = () => (
  <Router>
    <div className="App">
      <Routes>

        <Route path="/login" element={<SignInForm />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/" element={<Splash />} />

        <Route
          path="/*"
          element={
            <>
              <div className="content">
                <Routes>
                  <Route index element={<Homepage />} />
                  <Route path="/Homepage" element={<Homepage />} />
                  <Route path="/add" element={<Additempage />} />
                  <Route path="/reserve" element={<Reservepage />} />
                  <Route path="/car/:id" element={<CarDetailsPage />} />
                  <Route path="/reservationlist" element={<MyReservepage />} />
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
