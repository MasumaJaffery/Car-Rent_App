import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AddItemForm from '../forms/AddItemForm';
import ReserveAppointmentForm from '../forms/ReserveAppointmentForm';
import Icons from '../Homepage/icons';
import Reservepage from '../Reservepage/reservepage';

const Sidebar = ({ onSidebarItemClick }) => {
  const [selectedComponent, setSelectedComponent] = useState('carousel');
  const [isReservepageVisible, setReservepageVisible] = useState('Reservepage');
  const [isAddFormVisible, setAddFormVisible] = useState(false);
  const [isReserveFormVisible, setReserveFormVisible] = useState(false);

  const handleItemClick = (component) => {
    setSelectedComponent(component);
    onSidebarItemClick(component);

    // Reset form visibility when switching to another component
    setAddFormVisible(false);
    setReserveFormVisible(false);
  };

  const handleLogoClick = () => {
    setSelectedComponent('carousel');
    onSidebarItemClick('carousel');

    // Reset form visibility when clicking on the logo
    setAddFormVisible(false);
    setReserveFormVisible(false);
  };

  const handleResevepage = () => {
    setReservepageVisible('Reservepage');
    onSidebarItemClick('Reservepage');

    // Reset form visibility when clicking on the logo
    setAddFormVisible(false);
    setReserveFormVisible(false);
    setSelectedComponent(false);
  };
  const handleAddClick = () => {
    setAddFormVisible(true);
    setReserveFormVisible(false);
  };

  const handleReserveClick = () => {
    // Set visibility to false to hide forms
    setAddFormVisible(false);
    setReserveFormVisible(false);
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
          <button
            type="button"
            to="/models"
            onClick={() => handleItemClick('carousel')}
          >
            My Reservations
          </button>
        </li>
        <li className="list">
          <button type="button" to="/reserve" onClick={handleResevepage}>
            Reserve
          </button>
        </li>
        <li className="list">
          <button type="button" onClick={handleAddClick}>
            Add
          </button>
        </li>
        <li className="list">
          <button type="button" onClick={() => handleItemClick('delete')}>
            Delete
          </button>
        </li>
      </ul>
      <div className="logos">
        <Icons />
      </div>
      {isAddFormVisible && <AddItemForm />}
      {isReserveFormVisible && <ReserveAppointmentForm />}
      {selectedComponent === 'carousel' && <Carousel />}
      {setReservepageVisible === 'Resevepage' && <Reservepage />}
    </div>
  );
};

Sidebar.propTypes = {
  onSidebarItemClick: PropTypes.func.isRequired,
};

export default Sidebar;
