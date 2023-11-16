import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddItemForm from './components/forms/AddItemForm';
import Home from './components/Homepage/homepage';
import Sidebar from './components/Shared/sidebar';
import CarDetailsPage from './components/CarDetails/cardetailspage';
// import Reservepage from './components/Reservepage/reservepage';
import ReserveAppointmentForm from './components/forms/ReserveAppointmentForm';

const App = () => (
  <Router>
    <div className="App flex">
      <Routes>
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
