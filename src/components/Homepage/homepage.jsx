import React, { useState } from 'react';
import Sidebar from '../Shared/sidebar';
import Carousel from './carousel';

function Home() {
  const [isCarouselVisible, setCarouselVisible] = useState(true);

  const handleSidebarItemClick = (component) => {
    setCarouselVisible(component === 'carousel');
  };

  return (
    <div className="App flex">
      <Sidebar onSidebarItemClick={handleSidebarItemClick} />
      {isCarouselVisible && <Carousel />}
    </div>
  );
}

export default Home;
