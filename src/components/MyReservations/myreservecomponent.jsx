import React, { useState, useEffect } from 'react';
import backgroundImage from './reservationpage_bgimag.png';

const MyReserveComponent = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const mockReservations = [
      {
        id: 1, carName: 'Tesla Model S', reservationDate: '2023-01-15', city: 'New York',
      },
      {
        id: 2, carName: 'BMW i8', reservationDate: '2023-02-20', city: 'Los Angeles',
      },
      // ... more mock reservations
    ];
    setReservations(mockReservations);
  }, []);

  return (
    <div className="relative text-white p-8 h-screen">
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 bg-lime-400 opacity-50" />
      </div>

      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-4 mt-3">My Reservations</h1>
        <p className="mb-3 mt-10">Here you can view details of current, future and past reservations.</p>
        <p className="mb-6">Remember to review your last reservation, so we can improve our services.</p>

        {/* Table for Reservations */}
        <div className="overflow-x-auto">
          <table className="table-auto w-full">
            <thead>
              <tr className="bg-gray-700">
                <th className="px-4 py-2">Car Name</th>
                <th className="px-4 py-2">Reservation Date</th>
                <th className="px-4 py-2">City</th>
              </tr>
            </thead>
            <tbody>
              {reservations.map((reservation) => (
                <tr key={reservation.id} className="bg-gray-800 border-b border-gray-700">
                  <td className="px-4 py-2">{reservation.carName}</td>
                  <td className="px-4 py-2">{reservation.reservationDate}</td>
                  <td className="px-4 py-2">{reservation.city}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyReserveComponent;
