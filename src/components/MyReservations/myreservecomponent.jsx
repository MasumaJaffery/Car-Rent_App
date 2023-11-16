import React from 'react';
// Import your abstracted components if needed. For example:
// import Dropdown from './Dropdown';
// import Button from './Button';
import backgroundImage from './reservationpage_bgimag.png';

const MyReserveComponent = () => (
  <div className="relative text-white p-8 h-screen">
    {/* Background image with overlay */}
    <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}>
      {/* Overlay with opacity, adjust the color and opacity as needed */}
      <div className="absolute inset-0 bg-lime-400 opacity-50" />
    </div>

    {/* Content container */}
    <div className="relative z-10">
      <h1 className="text-4xl font-bold mb-4 mt-3">My Reservations</h1>
      <p className="mb-3 mt-10">Here you can view details of current, future and past reservations.</p>
      <p className="mb-6">Remember to review your last reservation, so we can improve our services.</p>

      {/* List from the backend => table */}
    </div>
  </div>
);

export default MyReserveComponent;
