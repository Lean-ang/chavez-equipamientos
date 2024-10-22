import Carousel from 'react-bootstrap/Carousel';
import Image from '../Image/Image'
import paladino from '../../data/img.json'
import luqstoff from '../../data/img2.json'
import kld from '../../data/img3.json'
import  './Carousel.css';

function CarouselComponent() {
  return (
    <div className='main'>
    <Carousel >
      <Carousel.Item className='Carousel'>
        {
            paladino.map(el =>(
                <Image key={el.id} src={el.src} alt={el.alt} />
            ))
        }
      </Carousel.Item>
      <Carousel.Item className='Carousel'>
        {
            luqstoff.map(el =>(
                <Image key={el.id} src={el.src} alt={el.alt} />
            ))
        }
      </Carousel.Item>
      <Carousel.Item className='Carousel'>
        {
            kld.map(el =>(
                <Image key={el.id} src={el.src} alt={el.alt} />
            ))
        }
      </Carousel.Item>
      
    </Carousel>
    </div>
  );
}

export default CarouselComponent;