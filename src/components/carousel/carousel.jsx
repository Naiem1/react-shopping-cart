import { Image } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/images/food1.jpg';
import img2 from '../../assets/images/food2.jpg';
import img3 from '../../assets/images/food3.jpg';

const carouselData = [
  {
    id: 1,
    img: img1,
    label: 'PIZZA',
    text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    id: 2,
    img: img2,
    label: 'BURGERS',
    text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
  {
    id: 3,
    img: img3,
    label: 'CHICKEN',
    text: 'Nulla vitae elit libero, a pharetra augue mollis interdum.',
  },
];

function HeroCarousel() {
  return (
    <Carousel data-bs-theme="light">
      {carouselData?.map((carousel) => (
        <Carousel.Item
          key={carousel.id}
          interval={1000}
          className="w-100 h-100 bg-dark"
        >
          <Image
            style={{ height: '550px' }}
            className="d-block w-100 object-fit-cover"
            src={carousel.img}
            alt="First slide"
          />
          <Carousel.Caption>
            <h5>{carousel.label}</h5>
            <p>{carousel.text}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default HeroCarousel;
