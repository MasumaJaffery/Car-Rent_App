import React from 'react';
import Sidebar from '../Homepage/sidebar'; 
import  Carousel  from '../Homepage/carousel';

function Home() {
  return (
    <div className="App flex">
      <Sidebar />
      <Carousel />
    </div>
  );
}

export default Home;
