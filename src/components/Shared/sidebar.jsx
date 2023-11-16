import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Icons from '../Homepage/icons';

const Sidebar = ({ onSidebarItemClick }) => {
  const handleLogoClick = () => {
    onSidebarItemClick('carousel');
  };

  return (
    <div className="sidebar w-[15vw]">
      <button type="button" className="logo" onClick={handleLogoClick}>
        <h2 className="logo1">Super Cars</h2>
      </button>
      <ul
        className="sidebar-menu flex flex-col items-start"
        style={{ marginLeft: '2%' }}
      >
        <li className="list">
          <Link to="/">My Reservations</Link>
        </li>
        <li className="list">
          <Link to="/reserve">Reserve</Link>
        </li>
        <li className="list">
          <Link to="/add">Add</Link>
        </li>
        <li className="list">
          <button type="button">Delete</button>
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
