import React from 'react';
import backgroundImage from './reservationpage_bgimag.png';
import ReservationForm from '../forms/ReserveAppointmentForm';
const ReserveComponent = () => (
  <div className="relative text-white p-8 min-h-screen flex items-center justify-center">
    <div
      className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        // Add an empty alt attribute or a comment
        alt: 'bg',
      }}
    >
      <div className="absolute inset-0 bg-lime-400 opacity-50" />
    </div>
    <div className="relative z-10 text-center">
      <h1 className="text-2xl ">Reserve it!</h1>
      <p>
        There are 34 different cars in Super Cars of the Vespa. Today five
        categories are in display: the classic manual transmission and the
        modern CVT transmission S, LX, GT, and GTS.
      </p>
      <ReservationForm />
    </div>
  </div>
);
export default ReserveComponent;
