import React from 'react';
import Sidebar from './sidebar';
import Carousel from './carousel';

function Home() {
  return (
    <div className="App flex">
      <Sidebar />
      <Carousel />
    </div>
  );
}

export default Home;
