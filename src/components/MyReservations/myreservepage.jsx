import React from 'react';
import ReserveAppointmentForm from '../forms/ReserveAppointmentForm'; 
const ReservationPage = () => {
  const currentUser = { id: 1, name: 'John Doe' }; 

  return (
    <div>
      <h1>Reserve Appointment</h1>
      <ReserveAppointmentForm currentUser={currentUser} />
    </div>
  );
};

export default ReservationPage;
