import React from 'react';
import Sidebar from '../Shared/sidebar';
import Reservecomponent from './reservecomponent';

function Reservepage() {
  return (
    <div className="App flex">
      <Sidebar />
      <Reservecomponent />
    </div>
  );
}

export default Reservepage;
