import React, { useState } from 'react';
import axios from 'axios';

const CarSellingForm = () => {
  const [financeFee, setFinanceFee] = useState('');
  const [purchaseFee, setPurchaseFee] = useState('');
  const [totalAmountPayable, setTotalAmountPayable] = useState('');
  const [duration, setDuration] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('name', financeFee);
      formData.append('description', purchaseFee);
      formData.append('category', totalAmountPayable);
      formData.append('added_by', duration);
      formData.append('picture', selectedFile);

      await axios.post('http://your-rails-api-url/cars', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // Handle success or redirect as needed
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error
    }
  };

  const handleFileChange = (e) => {
    // Handle file selection logic here
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-10 p-4 bg-white shadow-md rounded-md"
    >
      <label className="block mb-2">
        Name:
        <input
          type="text"
          value={financeFee}
          onChange={(e) => setFinanceFee(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-lime-500"
        />
      </label>

      <label className="block mb-2">
        Description:
        <input
          type="text"
          value={purchaseFee}
          onChange={(e) => setPurchaseFee(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-lime-500"
        />
      </label>

      <label className="block mb-2">
        Category:
        <input
          type="text"
          value={totalAmountPayable}
          onChange={(e) => setTotalAmountPayable(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-lime-500"
        />
      </label>

      <label className="block mb-2">
        Added by:
        <input
          type="text"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-lime-500"
        />
      </label>

      <label className="block mb-2">
        Upload Picture:
        <input
          type="file"
          onChange={handleFileChange}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-lime-500"
        />
        {selectedFile && (
          <p className="mt-2 text-sm text-gray-500">
            Selected File:
            {selectedFile.name}
          </p>
        )}
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
