import React from 'react';
import { FaTwitter,FaFacebookF,FaGooglePlusG,FaVimeoV,FaPinterestP } from 'react-icons/fa';

const Icons = () => {
  return (
    <div className="flex flex-col">
    <div className="logos flex items-center justify-center">
        <FaTwitter />
        <FaFacebookF />
        <FaGooglePlusG />
        <FaVimeoV />
        <FaPinterestP />
      </div>
      <div>
      <p className="copywrite">© 2023 Super Cars</p>
      </div>
      </div>
  );
};

export default Icons;
