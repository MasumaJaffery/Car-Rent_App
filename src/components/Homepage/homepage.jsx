import React from 'react';
import Carousel from './carousel';
import Sidebar from '../Shared/sidebar';

function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <Carousel />
    </div>
  );
}

export default Home;
