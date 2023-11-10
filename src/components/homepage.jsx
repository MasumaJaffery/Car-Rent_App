import React from 'react';
import Sidebar from '../components/sidebar'; 
import  Carousel  from '../components/carousel';

function Home() {
  return (
    <div className="App flex">
      <Sidebar />
      <Carousel />
    </div>
  );
}

export default Home;
