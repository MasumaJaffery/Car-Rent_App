import React from 'react';
import backgroundImage from './reservationpage_bgimag.png';
import CarSellingForm from '../forms/AddItemForm';

const AdditemComponent = () => (
  <div className="relative text-white p-8 min-h-screen flex items-center justify-center">
    <div
      className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        alt: '',
      }}
    >
      <div className="absolute inset-0 bg-lime-400 opacity-50" />
    </div>

    <div className="relative z-10 text-center">
      <h1 className="text-4xl font-bold mt-10 mb-4">
        Add your car with properties!
      </h1>
      <p className="mb-3 mt-10">
        There are 34 different cars in Super Cars of the Vespa. Today five
        categories are in display: the classic manual transmission and the
        modern CVT transmission S, LX, GT, and GTS.
      </p>

      <CarSellingForm />
    </div>
  </div>
);

export default AdditemComponent;
