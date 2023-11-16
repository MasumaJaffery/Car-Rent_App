import React from 'react';
import Sidebar from '../Shared/sidebar';
import MyReserveComponent from './myreservecomponent';

function Reservepage() {
  return (
    <div className="App flex">
      <Sidebar />
      <MyReserveComponent />
    </div>
  );
}

export default Reservepage;
