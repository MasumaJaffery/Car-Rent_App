import React from 'react';
import Sidebar from '../Shared/sidebar';
import ReserveComponent from '../Reservepage/reservecomponent';

function Reservepage() {
  return (
    <div className="App flex">
      <Sidebar />
      <ReserveComponent />
    </div>
  );
}

export default Reservepage;
