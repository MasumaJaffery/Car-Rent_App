import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from 'axios';
import Car1 from '../../images/audi-png-45298.png';
import Car2 from '../../images/audi-png-45306.png';
import Car3 from '../../images/audi-png-45324.png';
import IconsCar from '../Homepage/icons_car';

const DeletePage = () => {
  const [carData, setCarData] = useState([]);
  const [randomCars, setRandomCars] = useState([]);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/items');
        setCarData(response.data);
        setRandomCars(generateRandomCars(response.data.length));
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };

    fetchCarData();
  }, []);

  const generateRandomCars = (count) => {
    const carImages = [Car1, Car2, Car3];

    return Array.from({ length: count }, () => {
      const randomIndex = Math.floor(Math.random() * carImages.length);
      return carImages[randomIndex];
    });
  };

  const handleDeleteClick = async (carId) => {
    try {
      // Make an API call to delete the car with the given ID
      await axios.delete(`http://localhost:4000/api/v1/items/${carId}`);

      // Update the carData state to reflect the deletion
      setCarData((prevData) => prevData.filter((car) => car.id !== carId));
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  return (
    <div className="Heading">
      <h1 className="mainh">Delete a car</h1>
      <div className="w-[80vw] mx-auto">
        <div>
          <Carousel
            showArrows
            showThumbs={false}
            showStatus={false}
            dynamicHeight={false}
            centerMode
            centerSlidePercentage={40}
            renderArrowPrev={(onClickHandler, hasPrev, label) => (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className={`absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-gray-500 text-white px-4 py-2 rounded mt-4 ${
                  hasPrev ? 'hover:bg-green-600' : ''
                }`}
              >
                &lt;
              </button>
            )}
            renderArrowNext={(onClickHandler, hasNext, label) => (
              <button
                type="button"
                onClick={onClickHandler}
                title={label}
                className={`absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-gray-500 text-white px-4 py-2 rounded mt-4 ${
                  hasNext ? 'hover:bg-green-600' : ''
                }`}
              >
                &gt;
              </button>
            )}
          >
            {carData.map((car, index) => (
              <div key={car.id}>
                {randomCars[index] && (
                  <img
                    src={randomCars[index]}
                    alt={`Random Car Rental ${index + 1}`}
                    className="w-full md:w-1/2 object-cover"
                  />
                )}
                <div className="details">
                  <IconsCar />
                  <h5 className="title">{car.name}</h5>
                  <p>{car.description}</p>
                  <button
                    type="button"
                    onClick={() => handleDeleteClick(car.id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default DeletePage;
