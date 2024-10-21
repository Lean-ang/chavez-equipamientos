import Carousel from 'react-bootstrap/Carousel';
import Logo from '../../assets/logo-chavez.svg'
import { Link } from 'react-router-dom';
import './Carousel.css'

function CarouselComponent() {
  return (
    <Carousel style={{ height: '100%' }}>
      <Carousel.Item interval={3000}>
        <div className='bg-image'>
          <img src={Logo} alt="Chavez Equipamientos" />
        </div>
        <Carousel.Caption>
          <h2>Elementos de proteccion</h2>
          {/* <Link className='btn btn-warning' to="/productos">Ver Productos</Link> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <div className='bg-image'>
          <img src={Logo} alt="Chavez Equipamientos" />
          {/* <h1>Chavez Equipamientos</h1> */}
        </div>
        <Carousel.Caption>
          <h2>Soluciones a medida</h2>
          {/* <Link className='btn btn-warning' to="/productos">Ver Productos</Link> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;