import React from 'react';
import Carousel from './carousel';
import Sidebar from './sidebar';

function Home() {
  return (
    <div className="App flex">
      <Sidebar />
      <Carousel />
    </div>
  );
}

export default Home;
