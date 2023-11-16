import React, { useState } from 'react';

const CarSellingForm = () => {
  const [financeFee, setFinanceFee] = useState('');
  const [purchaseFee, setPurchaseFee] = useState('');
  const [totalAmountPayable, setTotalAmountPayable] = useState('');
  const [duration, setDuration] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, including selectedFile if needed
    // console.log('Form submitted with selected file:', selectedFile);
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
        Finance Fee:
        <input
          type="text"
          value={financeFee}
          onChange={(e) => setFinanceFee(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-lime-500"
        />
      </label>

      <label className="block mb-2">
        Purchase Fee:
        <input
          type="text"
          value={purchaseFee}
          onChange={(e) => setPurchaseFee(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-lime-500"
        />
      </label>

      <label className="block mb-2">
        Total Amount Payable:
        <input
          type="text"
          value={totalAmountPayable}
          onChange={(e) => setTotalAmountPayable(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-lime-500"
        />
      </label>

      <label className="block mb-2">
        Duration:
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
