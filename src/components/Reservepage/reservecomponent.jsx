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
    </div>

    {/* Form for new reservation booking goes here  */}
  </div>
);

export default ReserveComponent;
