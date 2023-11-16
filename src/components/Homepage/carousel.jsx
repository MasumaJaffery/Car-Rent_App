import 'tailwindcss/tailwind.css'; // Import Tailwind CSS
import { Carousel } from 'react-responsive-carousel';
import Heading from './mainheading';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Car1 from '../../images/audi-png-45298.png';
import Car2 from '../../images/audi-png-45306.png';
import Car3 from '../../images/audi-png-45324.png';
import IconsCar from './icons_car';

const MyCarousel = () => (
  <div>
    <Heading />
    <div className="w-[85vw] mx-auto">
      <div>
        <Carousel
          showArrows
          showThumbs={false}
          showStatus={false}
          dynamicHeight={false}
          centerMode
          centerSlidePercentage={40}
        >
          <div>
            <img src={Car1} alt="Car Rental 1" className="w-full md:w-1/2 object-cover" />
            <div className="detials">
              <h5 className="title">Audi</h5>
              <p>...</p>
              <IconsCar />
            </div>
          </div>
          <div>
            <img src={Car2} alt="Car Rental 2" className="w-full md:w-50 object-cover" />
            <div className="detials">
              <h5 className="title">Audi</h5>
              <p>...</p>
              <IconsCar />
            </div>
          </div>
          <div>
            <img src={Car3} alt="Car Rental 3" className="w-full md:w-50 object-cover" />
            <div className="detials">
              <h5 className="title">Audi</h5>
              <p>...</p>
              <IconsCar />
            </div>
          </div>
          <div>
            <img src={Car1} alt="Car Rental 4" className="w-full md:w-50 object-cover" />
            <div className="detials">
              <h5 className="title">Audi</h5>
              <p>...</p>
              <IconsCar />
            </div>
          </div>
          <div>
            <img src={Car2} alt="Car Rental 5" className="w-full md:w-50 object-cover" />
            <div className="detials">
              <h5 className="title">Audi</h5>
              <p>...</p>
              <IconsCar />
            </div>
            <div />
          </div>
        </Carousel>
      </div>
    </div>
  </div>
);

export default MyCarousel;
