import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

const ReserveAppointmentForm = ({ currentUser, selectedCar }) => {
  const [appointmentDate, setAppointmentDate] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!currentUser || !selectedCar) {
      console.error('Missing user or car data');
      return; // Optionally, display an error message to the user
    }

    const formData = {
      user_id: currentUser?.id || '', // Default to empty string if currentUser is undefined
      car_id: selectedCar.id || '', // You might want to add a similar default behavior here
      date: appointmentDate,
      city: selectedCity,
    };

    try {
      const response = await axios.post('http://localhost:4000/api/v1/reservations', formData);
      console.log('Reservation submitted:', response.data);
      // Perform additional actions here
      if (response.status === 200) {
        const user = response.data;
        // Assuming you have a 'dispatch' function available from Redux
        dispatch(loginSuccess({ user }));
        console.log('Login!');
      }
    } catch (error) {
      console.error('Error submitting reservation:', error);
      // Handle reservation failure (e.g., show error message)
    }

    setAppointmentDate('');
    setSelectedCity('');
  };

  return (
    <form onSubmit={handleSubmit} className="text-black max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-md">
      <label className="block mb-2">
        Full Name:
        <input
          type="text"
          value={currentUser?.name || ''}
          readOnly
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </label>

      <label className="block mb-2 text-black">
        Car:
        <input
          type="text"
          value={selectedCar?.name || ''} // Assuming 'name' is a property of selectedCar
          readOnly
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </label>

      <label className="block mb-2 text-black">
        Location:
        <input
          type="text"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </label>

      <label className="block mb-2 text-black">
        Appointment Date:
        <input
          type="date"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </label>

      <button
        type="submit"
        className="w-full reserve_appointment_submit_btn text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none"
      >
        Reserve Appointment
      </button>
    </form>
  );
};

ReserveAppointmentForm.propTypes = {
  currentUser: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
  selectedCar: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  }),
};

export default ReserveAppointmentForm;