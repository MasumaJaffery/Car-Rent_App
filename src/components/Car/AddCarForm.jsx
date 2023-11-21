import React, { useState } from 'react';
import PropTypes from 'prop-types';
import postCarData from './PostData';

const AddCarForm = ({ onAddCar }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    category: '',
    added_by: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await postCarData(formData);

      if (response.ok) {
        console.log('Car added successfully!');
        onAddCar();
      } else {
        console.error('Error adding car');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setFormData({
      name: '',
      description: '',
      category: '',
      added_by: '',
    });
  };

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-semibold mb-4">Add Car</h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Description:
          </label>
          <input
            type="text"
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700"
          >
            Category:
          </label>
          <input
            type="text"
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <div>
          <label
            htmlFor="added_by"
            className="block text-sm font-medium text-gray-700"
          >
            Added By:
          </label>
          <input
            type="text"
            id="added_by"
            name="added_by"
            value={formData.added_by}
            onChange={handleChange}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>

        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Add Car
        </button>
      </form>
    </div>
  );
};
AddCarForm.propTypes = {
  onAddCar: PropTypes.func.isRequired,
};

export default AddCarForm;
