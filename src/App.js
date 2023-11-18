import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddItemForm from './components/forms/AddItemForm';
import Sidebar from './components/Shared/sidebar';
import CarDetailsPage from './components/CarDetails/cardetailspage';
// import Reservepage from './components/Reservepage/
import Myreservation from './components/MyReservations/myreservepage';
import Reservepage from './components/Reservepage/reservepage';

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
                  <Route index element={<Myreservation />} />
                  <Route path="/add" element={<AddItemForm />} />
                  <Route path="/reserve" element={<Reservepage />} />
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
