import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from 'axios';
import Car1 from '../../images/audi-png-45298.png';
import Car2 from '../../images/audi-png-45306.png';
import Car3 from '../../images/audi-png-45324.png';
import Heading from './mainheading';
import IconsCar from './icons_car';

const MyCarousel = () => {
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

  const handleReservation = (carId) => {
    localStorage.setItem('selectedCarId', carId);
    // window.location.href = `/items/${carId}`;
  };

  return (
    <div>
      <Heading />
      <div className="w-[80vw] mx-auto">
        <div>
          <Carousel
            showArrows
            showThumbs={false}
            showStatus={false}
            dynamicHeight={false}
            centerMode
            centerSlidePercentage={40}
          >
            {carData.map((car, index) => (
              <div key={car.id}>
                <Link to={`/car/${car.id}`}>
                  {randomCars[index] && (
                    <img
                      src={randomCars[index]}
                      alt={`Random Car Rental ${index + 1}`}
                      className="w-full md:w-1/2 object-cover"
                    />
                  )}
                  <div className="detials">
                    <IconsCar />
                    <h5 className="title">{car.name}</h5>
                    <p>{car.description}</p>
                    <button
                      type="button"
                      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                      onClick={() => handleReservation(car.id)}
                    >
                      Reserve
                    </button>
                  </div>
                </Link>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MyCarousel;
