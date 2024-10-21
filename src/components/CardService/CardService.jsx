import React from 'react'
import './CardService.css'

const CardService = ({title,description}) => {
  return (
    <div className='card-service'>
        <h3>{title}</h3>
        <p>{description}</p>
    </div>
  )
}

export default CardService