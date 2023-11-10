import React from 'react';
import { FaTwitter,FaFacebookF,FaInstagram} from 'react-icons/fa';

const Icons = () => {
  return (
    <div className="logo_media flex items-center justify-center">
        <div className='logo2'>
        <FaFacebookF/> 
        </div>
        <div className='logo2'>
        <FaTwitter/>   
        </div>
        <div className='logo2'>
        <FaInstagram/>
        </div>
      </div>
  );
};

export default Icons;
