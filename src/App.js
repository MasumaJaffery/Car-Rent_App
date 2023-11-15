import React from 'react';
import AddItemForm from './components/forms/AddItemForm';
import ReserveAppointmentForm from './components/forms/ReserveAppointmentForm';
import Home from './components/Homepage/homepage';

const App = () => (
  <div>
    <Home />
    <AddItemForm />
    <ReserveAppointmentForm />
    {/* Add other components as needed */}
  </div>
);

export default App;
