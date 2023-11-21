import React, { useState, useEffect } from 'react';

const FetchData = () => {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:4000/api/v1/cars');
        const data = await response.json();

        if (
          data.status &&
          data.status.code === 200 &&
          data.status.message === 'Logged in successfully.'
        ) {
          setError('Logged in successfully. No cars data available.');
        } else if (Array.isArray(data)) {
          setCars(data);
        } else {
          setError(`Unexpected API response format: ${JSON.stringify(data)}`);
        }
      } catch (error) {
        setError(`Error fetching data: ${error.message}`);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Car List</h2>
      <ul>
        {cars.map((car) => (
          <li key={car.id}>
            {car.name} - {car.description} - {car.category} - {car.added_by}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchData;
