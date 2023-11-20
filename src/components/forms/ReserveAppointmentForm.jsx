import React, { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import { loginSuccess } from '../../redux/slices/authSlice';

const ReserveAppointmentForm = ({ currentUser }) => {
  console.log('currentUser:', currentUser);
  const [selectedCar, setSelectedCar] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      user_id: currentUser.id,
      car_id: selectedCar.id,
      date: appointmentDate,
      city: selectedCity,
    };

    try {
      const response = await axios.post('http://localhost:4000/api/v1/reservations', formData);
      console.log('Reservation submitted:', response.data);
      // Perform additional actions here
    } catch (error) {
      console.error('Error submitting reservation:', error);
    }
    
    if (response.ok) {
      const user = await response.json();
      dispatch(loginSuccess({ user }));
      console.log('Login!');
    }
    

    setAppointmentDate('');
    setSelectedCity('');
  };

  // if (!currentUser) {
  //   console.error('Missing user or car data');
  //   // Optionally, display an error message to the user
  //   return ('not ready yet');
  // }

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-md">
      <label className="block mb-2">
        Full Name:
        <input
          type="text"
          value={currentUser?.name || ''} // Assuming 'name' is a property of currentUser
          readOnly
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </label>

      <label className="block mb-2">
        Car:
        <input
          type="text"
          value={(e) => setSelectedCar(e.target.value)}
          readOnly
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </label>

      <label className="block mb-2">
        Location:
        <input
          type="text"
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </label>

      <label className="block mb-2">
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
    name: PropTypes.string.isRequired, // Add name to the propTypes
  }).isRequired,
  selectedCar: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired, // Add name to the propTypes
  }).isRequired,
};

export default ReserveAppointmentForm;
