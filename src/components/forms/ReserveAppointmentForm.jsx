import { useState } from 'react';
import axios from 'axios';

const ReservationForm = () => {
  const [date, setDate] = useState('');
  const [city, setCity] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:4000/api/v1/reservations',
        {
          user_id: getUserId(),
          car_id: null,
          date,
          city,
        }
      );
      console.log(response.data); // Display the response from the backend
      // Reset the form
      setDate('');
      setCity('');
    } catch (error) {
      console.error(error);
    }
  };
  const getUserId = () => {
    const userIdCookie = document.cookie
      .split('; ')
      .find((row) => row.startsWith('user_id='));
    return userIdCookie ? userIdCookie.split('=')[1] : null;
  };
  return (
    <div className="form-container">
      <h2 className="text-2xl font-bold mb-4">Create Reservation</h2>
      <form className="space-y-4 text-black" onSubmit={handleSubmit}>
        <div className="flex flex-col items-center justify-center sm:flex-row">
          <label
            htmlFor="date"
            className="block text-gray-800 font-medium mr-4"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            className="form-input sm:w-30vw md:w-30vh mt-1 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="flex flex-col items-center text-black justify-center sm:flex-row">
          <label
            htmlFor="city"
            className="block text-gray-800 font-medium mr-4"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            className="form-input sm:w-30vw md:w-30vh text-black mt-1 rounded-md border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Was not project requirments"
            required
          />
        </div>
        <button
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ReservationForm;
