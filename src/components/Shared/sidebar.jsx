// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Icons from '../Homepage/icons';
import Logout from '../Deviseforms/logout';

const Sidebar = ({ onSidebarItemClick }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogoClick = () => {
    onSidebarItemClick('carousel');
  };

  const handleHamburgerClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSidebarItemClick = () => {
    onSidebarItemClick();
    setIsSidebarOpen(false);
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <button type="button" className="logo" onClick={handleLogoClick}>
        <h2 className="logo1">Super Cars</h2>
      </button>
      <button
        type="button"
        className="hamburger-menu"
        onClick={handleHamburgerClick}
      >
        ☰
      </button>
      <ul
        className={`sidebar-menu flex flex-col items-start ${
          isSidebarOpen ? 'open' : ''
        }`}
      >
        <li className="list">
          <Link to="/homepage" onClick={handleSidebarItemClick}>
            Catalog of Cars
          </Link>
        </li>
        <li className="list">
          <Link to="/reserve" onClick={handleSidebarItemClick}>
            Reserve
          </Link>
        </li>
        <li className="list">
          <Link to="/add" onClick={handleSidebarItemClick}>
            Add
          </Link>
        </li>
        <li className="list">
          <Link to="/reservationlist" onClick={handleSidebarItemClick}>
            Reserve List
          </Link>
        </li>
        <li className="list">
          <Logout /> {/* Render the Logout component */}
        </li>
      </ul>
      <div className="logos">
        <Icons />
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  onSidebarItemClick: PropTypes.func.isRequired,
};

export default Sidebar;
