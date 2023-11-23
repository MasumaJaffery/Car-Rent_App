import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Icons from '../Homepage/icons';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogoClick = () => {};

  const handleHamburgerClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div
      className={`sidebar h-[100vh] bg-gray-100 text-black ${
        isSidebarOpen ? 'open' : ''
      }`}
    >
      <button type="button" className="logo" onClick={handleLogoClick}>
        <h2 className="logo1">Super Cars</h2>
      </button>
      <button
        type="button"
        className="hamburger-menu"
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
      </ul>
      <div className=" bottom-0 left-0 right-0 flex justify-end items-center p-4">
        <Icons />
      </div>
    </div>
  );
};

// Sidebar.propTypes = {
//   onSidebarItemClick: PropTypes.func.isRequired,
// };

export default Sidebar;
