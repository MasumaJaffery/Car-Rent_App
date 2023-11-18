import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import AddItemForm from './components/forms/AddItemForm';
import Home from './components/Homepage/homepage';
import Sidebar from './components/Shared/sidebar';
import CarDetailsPage from './components/CarDetails/cardetailspage';
import ReserveAppointmentForm from './components/forms/ReserveAppointmentForm';
import SignUpForm from './components/Deviseforms/signup';

const App = () => {
  // Check if the user is authenticated (you need to implement this logic)
  const isAuthenticated = false; // Replace this with your actual authentication logic

  return (
    <Router>
      <div className="App flex">
        <Routes>
          <Route
            path="/*"
            element={
              <>
                {isAuthenticated ? (
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
                      </Routes>
                    </div>
                  </>
                ) : (
                  <Navigate to="/signup" />
                )}
              </>
            }
          />
          <Route path="/signup" element={<SignUpForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
