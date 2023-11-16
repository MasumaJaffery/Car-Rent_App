import React from 'react';
import Sidebar from '../Shared/sidebar';
import CarDetails from './CarDetails';

function CarDetailsPage() {
  return (
    <div className="App flex">
      <Sidebar />
      <CarDetails />
    </div>
  );
}

export default CarDetailsPage;
