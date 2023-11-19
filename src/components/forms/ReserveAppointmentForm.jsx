import React, { useState } from 'react';
import axios from 'axios';

const ReserveAppointmentForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      fullName,
      email,
      phone,
      appointmentDate,
    };

    try {
      const response = await axios.post('http://localhost:4000/api/v1/reserve', formData);
      console.log('Reservation submitted:', response.data);
      // Perform additional actions here, such as showing a success message
    } catch (error) {
      console.error('Error submitting reservation:', error);
    }

    localStorage.removeItem('reservationFormData');
    setFullName('');
    setEmail('');
    setPhone('');
    setAppointmentDate('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-md"
    >
      <label className="block mb-2">
        Full Name:
        <input
          type="text"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </label>

      <label className="block mb-2">
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
        />
      </label>

      <label className="block mb-2">
        Phone:
        <input
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
        className="w-full reserve_appointment_submit_btn text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none "
      >
        Reserve Appointment
      </button>
    </form>
  );
};

export default ReserveAppointmentForm;
