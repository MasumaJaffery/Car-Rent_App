import "tailwindcss/tailwind.css"; // Import Tailwind CSS
import Heading from '../Homepage/mainheading';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Car1 from '../../images/audi-png-45298.png';
import Car2 from '../../images/audi-png-45306.png';
import Car3 from '../../images/audi-png-45324.png';
import Car4 from '../../images/bmw-car-png-2085.png';
import Car5 from '../../images/car-png-39055.png';
import IconsCar from '../Homepage/icons_car';

const MyCarousel = () => {
  return (
    <div>
    <Heading/>
    <div className="w-[85vw] mx-auto">
      <div>
        <Carousel
          showArrows={true}
          showThumbs={false} 
          showStatus={false} 
          dynamicHeight={false}
          centerMode={true}
          centerSlidePercentage={40}
        >
          <div>
            <img src={Car1} alt="Image 1" className="w-full md:w-1/2 object-cover" />
            <div className="detials">
            <h5 className="title">Audi</h5>
            <p>...</p>
            <IconsCar />
            </div>
          </div>
          <div>
            <img src={Car2} alt="Image 2"  className="w-full md:w-50 object-cover" />
            <div className="detials">
            <h5 className="title">Audi</h5>
            <p>...</p>
            <IconsCar />
            </div>
          </div>
          <div>
            <img src={Car3} alt="Image 3" className="w-full md:w-50 object-cover" />
            <div className="detials">
            <h5 className="title">Audi</h5>
            <p>...</p>
            <IconsCar />
            </div>
          </div>
          <div>
            <img src={Car1} alt="Image 4" className="w-full md:w-50 object-cover" />
            <div className="detials">
            <h5 className="title">Audi</h5>
            <p>...</p>
            <IconsCar />
            </div>
          </div>
          <div>
            <img src={Car2} alt="Image 5" className="w-full md:w-50 object-cover" />
            <div className="detials">
            <h5 className="title">Audi</h5>
            <p>...</p>
            <IconsCar />
            </div>
            <div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  </div>
  );
};

export default MyCarousel;
