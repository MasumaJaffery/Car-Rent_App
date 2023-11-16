import React from 'react';
import backgroundImage from './reservationpage_bgimag.png';

const ReserveComponent = () => (
  <div className="relative text-white p-8 h-screen">
    {/* Background image with overlay */}
    <div
      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        // Add an empty alt attribute or a comment
        alt: '',
      }}
    >
      {/* Overlay with opacity, adjust the color and opacity as needed */}
      <div className="absolute inset-0 bg-lime-400 opacity-50" />
    </div>

    {/* Content container */}
    <div className="relative z-10">
      <h1 className="text-4xl font-bold mb-4 mt-3">BOOK A CAR TEST-RIDE</h1>
      <p className="mb-3 mt-10">
        There are 34 different cars in Super Cars of the Vespa. Today five
        categories are in display: the classic manual transmission and the
        modern CVT transmission S, LX, GT, and GTS. We have showrooms all over
        the globe which some include test-riding facilities.
      </p>
      <p className="mb-6">
        If you wish to find out if a test-ride is available in your area, please
        use the selector below.
      </p>

      <form className="flex flex-col items-center">
        <div className="mb-6 w-full">
          <label htmlFor="usernameSelector" className="block mb-2">
            Your Username for this booking:
          </label>

          <select
            id="usernameSelector"
            name="username"
            className="form-select bg-white/70 text-gray-700 border border-gray-300 rounded p-2 w-48 focus:border-blue-500 focus:outline-none focus:ring"
          >
            <option value="username">Username</option>
            {/* Add other options here */}
          </select>
        </div>

        <div className="mb-6 w-full">
          <label htmlFor="locationSelector" className="block mb-2">
            Choose a location:
          </label>

          <select
            id="locationSelector"
            name="location"
            className="form-select bg-white/70 text-gray-700 border border-gray-300 rounded p-2 w-48 focus:border-blue-500 focus:outline-none focus:ring"
          >
            <option value="london">London</option>
            <option value="milano">Milano</option>
            <option value="paris">Paris</option>
            <option value="newyork">New York</option>
            {/* Add other options here */}
          </select>
        </div>

        <button
          type="submit"
          className="bg-yellow-400 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded w-36"
        >
          Book Now
        </button>
      </form>
    </div>
  </div>
);

export default ReserveComponent;
