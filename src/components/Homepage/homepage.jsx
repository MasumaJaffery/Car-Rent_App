import React from 'react';
import Carousel from './carousel';
import Navigation from '../Navigation';

function Home() {
  return (
    <div className="App flex">
      <Navigation />
      <Carousel />
    </div>
  );
}

export default Home;
