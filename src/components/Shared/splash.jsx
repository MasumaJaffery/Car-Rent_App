import React from 'react';
import logo from '../../images/LogoByM.png';

function Splash() {
  return (
    <div className="flexxx justify-center items-center h-screen bg-neutral-50">
      <div className="flex flex-col items-center">
        <div className="logo mb-1">
          <img src={logo} alt="Logo" className="w-64 h-50" />
        </div>
        <h3 className="font-semibold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-4">
          Book Your Dream Car For A Day!
        </h3>
        <div className="flex items-center gap-6">
          <a
            href="http://127.0.0.1:3000/signup"
            className="bg-lime-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full inline-block transition duration-300"
          >
            Sign Up
          </a>
          <a
            href="http://127.0.0.1:3000/login"
            className="bg-lime-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full inline-block transition duration-300"
          >
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
}

export default Splash;
