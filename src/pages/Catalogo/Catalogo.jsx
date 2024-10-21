import React from 'react'
import CardComponent from '../../components/Card/CardComponent'
import equipamiento from '../../data/equipamiento.json'
import herramientas from '../../data/herramientas.json'
import herramientasinalambricas from '../../data/herramientas-inalambricas.json'
import construccion from '../../data/construccion.json'
import jardineria from '../../data/jardineria.json'
import soldadura from '../../data/soldadura.json'
import NavbarProducts from '../../components/NavbarProducts/NavbarProducts'
import './Catalogo.css'

const Catalogo = () => {
  return (
    <>
      <NavbarProducts/>
      <main id='catalogo'>
        <h1 className='hero-title'>Catalogo General</h1>
        <hr />
        <section className='product-container' id='herramientas'>
          <h2>Herramientas</h2>
          <div className='catalogo-container'>
            {
              herramientas.map(el => (
                <CardComponent key={el.title} title={el.title} src={el.imageURL} />
              ))
            }
          </div>
        </section>
        <section className='product-container' id='herramientas'>
          <h2>Inalambricas</h2>
          <div className='catalogo-container'>
            {
              herramientasinalambricas.map(el => (
                <CardComponent key={el.title} title={el.title} src={el.imageURL} />
              ))
            }
          </div>
        </section>
        <section className='product-container' id='equipamiento-taller'>
          <h2>Equipamiento Taller</h2>
          <div className='catalogo-container'>
            {
              equipamiento.map(el => (
                <CardComponent key={el.title} title={el.title} src={el.imageURL} />
              ))
            }
          </div>
        </section>
        <section className='product-container' id='soldadura'>
          <h2>Soldadura</h2>
          <div className='catalogo-container'>
            {
              soldadura.map(el => (
                <CardComponent key={el.title} title={el.title} src={el.imageURL} />
              ))
            }
          </div>
        </section>
        <section className='product-container' id='construccion'>
          <h2>Construcción</h2>
          <div className='catalogo-container'>
            {
              construccion.map(el => (
                <CardComponent key={el.title} title={el.title} src={el.imageURL} />
              ))
            }
          </div>
        </section>
        <section className='product-container' id='jardineria'>
          <h2>Jardineria</h2>
          <div className='catalogo-container'>
            {
              jardineria.map(el => (
                <CardComponent key={el.title} title={el.title} src={el.imageURL} />
              ))
            }
          </div>
        </section>
      </main>
    </>
  )
}

export default Catalogo