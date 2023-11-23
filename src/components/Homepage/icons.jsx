import React from 'react';
import {
  FaTwitter,
  FaFacebookF,
  FaGooglePlusG,
  FaVimeoV,
  FaPinterestP,
} from 'react-icons/fa';

const Icons = () => (
  <div className="flex flex-col items-center justify-center mt-8">
    <div className="flex items-center space-x-4 mb-4">
      <FaTwitter className=" hover:text-blue-700 cursor-pointer" />
      <FaFacebookF className=" hover:text-blue-700 cursor-pointer" />
      <FaGooglePlusG className=" hover:text-red-700 cursor-pointer" />
      <FaVimeoV className=" hover:text-blue-700 cursor-pointer" />
      <FaPinterestP className=" hover:text-red-700 cursor-pointer" />
    </div>
    <p className="text-gray-600">© 2023 Super Cars</p>
  </div>
);

export default Icons;
