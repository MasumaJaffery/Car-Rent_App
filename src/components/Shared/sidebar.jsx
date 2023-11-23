import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Icons from '../Homepage/icons';
import Logout from '../Deviseforms/logout';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogoClick = () => {};

  const handleHamburgerClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen w-64 bg-gray-200">
        <h2 className="logo1 text-lg font-bold">Super Cars</h2>
      <button
        type="button"
        className="hamburger-menu p-4"
        onClick={handleHamburgerClick}
      >
        <span className="visually-hidden">Toggle Menu</span>
      </button>
      <ul
        className={`sidebar-menu flex flex-col items-start ${
          isSidebarOpen ? 'open' : ''
        }`}
      >
        <li className="list">
          <Link
            to="/homepage"
            onClick={handleHamburgerClick}
            className="block text-black py-2 px-4"
          >
            Catalog of Cars
          </Link>
        </li>
        {/* Update the link to navigate to "/delete" */}
        <li className="list">
          <Link
            to="/delete"
            onClick={handleHamburgerClick}
            className="block text-black py-2 px-4"
          >
            Delete
          </Link>
        </li>
        <li className="list">
          <Link
            to="/reserve"
            onClick={handleHamburgerClick}
            className="block text-black py-2 px-4"
          >
            Reserve
          </Link>
        </li>
        <li className="list">
          <Link
            to="/add"
            onClick={handleHamburgerClick}
            className="block text-black py-2 px-4"
          >
            Add
          </Link>
        </li>
        <li className="list">
          <Link
            to="/reservationlist"
            onClick={handleHamburgerClick}
            className="block text-black py-2 px-4"
          >
            Reserve List
          </Link>
        </li>
        <li className="list">
          <button type="button" onClick={handleHamburgerClick} className="block text-black py-2 px-4">
          <Logout /> 
          </button>
        </li>
        <li className="flex justify-end items-center p-2">
        <Icons />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
