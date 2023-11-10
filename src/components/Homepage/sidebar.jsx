import React from 'react';
import Icons from './icons';

const Sidebar = () => (
  <div className="sidebar w-[15vw]">
    <div className="logo">
      <h2 className="logo1">Super Cars</h2>
    </div>
    <ul className="sidebar-menu flex flex-col items-start" style={{ marginLeft: '2%' }}>
      <li className="list">MODELS</li>
      <li className="list">LIFESTYLE</li>
      <li className="list">SHOP</li>
      <li className="list">TEST DRIVE</li>
    </ul>
    <div className="logos">
      <Icons />
    </div>
  </div>
);

export default Sidebar;
