// Sidebar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Icons from '../Homepage/icons';

const Sidebar = ({ onSidebarItemClick }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogoClick = () => {
    onSidebarItemClick('carousel');
  };

  const handleHamburgerClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
        <span className="visually-hidden">fd</span>
      </button>
      <ul
        className={`sidebar-menu flex flex-col items-start ${
          isSidebarOpen ? 'open' : ''
        }`}
      >
        <li className="list">
          <Link to="/homepage" onClick={handleHamburgerClick}>
            Catalog of Cars
          </Link>
        </li>
        {/* Update the link to navigate to "/delete" */}
        <li className="list">
          <Link to="/delete" onClick={handleHamburgerClick}>
            Delete
          </Link>
        </li>
        <li className="list">
          <Link to="/reserve" onClick={handleHamburgerClick}>
            Reserve
          </Link>
        </li>
        <li className="list">
          <Link to="/add" onClick={handleHamburgerClick}>
            Add
          </Link>
        </li>
        <li className="list">
          <Link to="/reservationlist" onClick={handleHamburgerClick}>
            Reserve List
          </Link>
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
