import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import the Carousel styles
import Icons from './icons';
import AddItemForm from '../forms/AddItemForm'; // Make sure to adjust the path to your AddItemForm component
import ReserveAppointmentForm from '../forms/ReserveAppointmentForm'; // Import the ReserveAppointmentForm component

const Sidebar = () => {
  const [isAddFormVisible, setAddFormVisible] = useState(false);
  const [isReserveFormVisible, setReserveFormVisible] = useState(false);
  const [isCarouselVisible, setCarouselVisible] = useState(true);

  const handleAddClick = () => {
    setAddFormVisible(!isAddFormVisible);
    setReserveFormVisible(false);
    setCarouselVisible(false);
  };

  const handleReserveClick = () => {
    setReserveFormVisible(!isReserveFormVisible);
    setAddFormVisible(false);
    setCarouselVisible(false);
  };

  const handleLogoClick = () => {
    // Handle clicking the logo to show the default state (no forms visible, carousel visible)
    setAddFormVisible(false);
    setReserveFormVisible(false);
    setCarouselVisible(true);
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
          <a href="#models" onClick={handleLogoClick}>
            Reserve
          </a>
        </li>
        <li className="list">
          <a href="#lifestyle" onClick={handleLogoClick}>
            My Reservations
          </a>
        </li>
        <li className="list">
          <button type="button" onClick={handleAddClick}>
            Add
          </button>
        </li>
        <li className="list">
          <button type="button" onClick={handleReserveClick}>
            Reserve Appointments
          </button>
        </li>
      </ul>
      <div className="logos">
        <Icons />
      </div>
      {isAddFormVisible && <AddItemForm />}
      {isReserveFormVisible && <ReserveAppointmentForm />}
      {isCarouselVisible && <Carousel />}
    </div>
  );
};

export default Sidebar;
