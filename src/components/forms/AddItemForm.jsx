// CarSellingForm.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CarSellingForm = () => {
  const [formData, setFormData] = useState(() => {
    const savedFormData = localStorage.getItem('carFormData');
    return savedFormData
      ? JSON.parse(savedFormData)
      : {
        name: '',
        description: '',
        price: '',
        city: '',
        image: '',
      };
  });

  useEffect(() => {
    localStorage.setItem('carFormData', JSON.stringify(formData));
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      image: file,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formDataToSend = new FormData();
    formDataToSend.append('name', formData.name);
    formDataToSend.append('description', formData.description);
    formDataToSend.append('price', formData.price);
    formDataToSend.append('city', formData.city);
    formDataToSend.append('image', formData.image);

    try {
      const response = await axios.post('http://localhost:4000/api/v1/items', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Item created:', response.data);
      setFormData({
        name: '',
        description: '',
        price: '',
        city: '',
        image: null,
      });
      localStorage.removeItem('carFormData');
    } catch (error) {
      console.error('Error creating item:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-md">
      <label className="block mb-2 text-black">
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-lime-500"
        />
      </label>

      <label className="block mb-2 text-black">
        Description:
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-lime-500"
        />
      </label>

      <label className="block mb-2 text-black">
        Price:
        <input
          type="text"
          name="price"
          value={formData.price}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-lime-500"
        />
      </label>

      <label className="block mb-2 text-black">
        City:
        <input
          type="text"
          name="city"
          value={formData.city}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-lime-500"
        />
      </label>

      <label className="block mb-2 text-black">
        Upload Picture:
        <input
          type="file"
          name="image"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-lime-500"
        />
      </label>

      <button
        type="submit"
        className="w-full bg-lime-500 text-white py-2 px-4 add_item_submit_btn rounded-md hover:bg-lime-700 focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
};

export default CarSellingForm;
