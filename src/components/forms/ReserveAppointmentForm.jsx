import React, { useState } from 'react';

const ReserveAppointmentForm = () => {
  const [date, setDate] = useState('');
  const [userName, setUserName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to send data to the Rails backend
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="datetime-local"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="userName">User Name:</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
      </div>

      <button type="submit">Reserve Appointment</button>
    </form>
  );
};

export default ReserveAppointmentForm;
