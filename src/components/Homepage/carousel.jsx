import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import axios from 'axios';
import Icons from './icons';
import Heading from './mainheading';

const MyCarousel = () => {
  const [carData, setCarData] = useState([]);

  useEffect(() => {
    const fetchCarData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/v1/items');
        setCarData(response.data);
      } catch (error) {
        console.error('Error fetching car data:', error);
      }
    };

    fetchCarData();
  }, []);

  return (
    <div>
      <Heading />
      <div className="w-[85vw] mx-auto">
        <div>
          <Carousel
            showArrows
            showThumbs={false}
            showStatus={false}
            dynamicHeight={false}
            centerMode
            centerSlidePercentage={40}
          >
            {carData.map((car) => (
              <div key={car.id}>
                <Link to={`/car/${car.id}`}>
                  <img
                    src={car.image}
                    alt={car.name}
                    className="w-full md:w-1/2 object-cover"
                  />
                  <div className="detials">
                    <h5 className="title">{car.name}</h5>
                    <p>{car.description}</p>
                    <Icons />
                    {/* Additional details or icons can be added here */}
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
