import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useAuth } from '../Shared/AuthContext'; // Adjust the import path

const CarSellingForm = () => {
  const auth = useAuth();
  const { user } = auth;
  const dispatch = useDispatch();
  if (!user) {
    // Handle the case when the user is not authenticated
    console.log('no userrrrrrrrrrrrrr!!');
    return null;
  }
  let initialName = '';
  let initialDescription = '';
  let initialCategory = '';
  let initialAddedBy = '';

  if (user) {
    initialName = user.name;
    initialDescription = user.description;
    initialCategory = user.category;
    initialAddedBy = user.addedBy;
  }

  const [name, setName] = useState(initialName);
  const [description, setDescription] = useState(initialDescription);
  const [category, setCategory] = useState(initialCategory);
  const [addedBy, setAddedBy] = useState(initialAddedBy);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('category', category);
      formData.append('added_by', addedBy);
      if (selectedFile) {
        formData.append('picture', selectedFile, selectedFile.name);
      }

      if (!user || !user.id) {
        // Handle the case when the user or user.id is null or undefined
        console.error('User or user ID is missing.');
        // You can redirect to a login page or show a message to the user
        // For example, you might want to redirect to the login page:
        // history.push('/login');
        return;
      }

      const response = await axios.post(
        `http://localhost:4000/api/v1/users/${user.id}/cars`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response && response.data) {
        console.log('Car added successfully:', response.data);
      } else {
        console.log('Car added successfully, but response data is undefined.');
      }
    } catch (error) {
      console.error('Error adding car:', error.response?.data || error.message);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-md"
    >
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-lime-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Description:
        </label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-lime-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Category:
        </label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-lime-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Added by:
        </label>
        <input
          type="text"
          value={addedBy}
          onChange={(e) => setAddedBy(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-lime-500"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-600">
          Upload Picture:
        </label>
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-lime-500"
        />
        {selectedFile && (
          <p className="mt-2 text-sm text-gray-500">
            Selected File: {selectedFile.name}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="w-full bg-lime-500 text-white py-2 px-4 rounded-md hover:bg-lime-700 focus:outline-none"
      >
        Submit
      </button>
    </form>
  );
};

// CarSellingForm.propTypes = {
//   // Add any prop types if needed
// };

export default CarSellingForm;
