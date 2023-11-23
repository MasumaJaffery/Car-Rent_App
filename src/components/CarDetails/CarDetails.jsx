import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Car1 from '../../images/audi-png-45298.png';

const CarDetailsComponent = ({
  name: initialName,
  description: initialDescription,
  price: initialPrice,
  addedby: initialAddedBy,
}) => {
  const selectedCarId = localStorage.getItem('selectedCarId');
  const handleReservation = () => {
    const selectedCarId = localStorage.getItem('selectedCarId');
    console.log('Selected Car ID:', selectedCarId);
    // Do something with the selectedCarId
  };

  const [name, setName] = useState(initialName);
  const [description, setDescription] = useState(initialDescription);
  const [price, setPrice] = useState(initialPrice);
  const [addedby, setAddedBy] = useState(initialAddedBy);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://localhost:4000/api/v1/items/${selectedCarId}`, // Use selectedCarId
        );
        const data = await response.json();
        setName(data.name);
        setDescription(data.description);
        setPrice(data.price);
        setAddedBy(data.addedby);
      } catch (error) {
        console.error('Error fetching car data:', error);
        setError('Error fetching car data');
      }
    };

    fetchData();
  }, [selectedCarId]); // Use selectedCarId

  return (
    <div className="bg-white p-8 flex flex-col items-center justify-center shadow-lg rounded-lg">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:gap-64">
        <img
          src={Car1}
          alt="Car"
          className="w-full lg:w-1/2 mb-4 lg:mb-0 lg:mr-8"
        />
        <div className="text-center lg:text-left">
          <h2 className="text-3xl font-bold mb-4">{name}</h2>
          <h4 className="text-3sm mb-4">{description}</h4>
          {error && <p className="text-red-500">{error}</p>}
          <table className="table-auto border-collapse mb-4">
            <tbody>
              <tr className="border-b bg-slate-200">
                <td className="py-2">Name</td>
                <td className="py-2">{name}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Description</td>
                <td className="py-2">{description}</td>
              </tr>
              <tr className="border-b bg-slate-200">
                <td className="py-2">Price</td>
                <td className="py-2">{price}</td>
              </tr>
              <tr className="border-b">
                <td className="py-2">Added By</td>
                <td className="py-2">{addedby}</td>
              </tr>
            </tbody>
          </table>
          <div className="text-2xl font-bold mb-6">5.9% APR Representative</div>
          <div className="flex justify-center lg:justify-start gap-4">
            <Link to={`/reservation/${name}`} className="text-white">
              <button
                type="button"
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full shadow-md"
                onClick={handleReservation}
              >
                Make Reservation
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

CarDetailsComponent.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  addedby: PropTypes.string.isRequired,
};

export default CarDetailsComponent;
