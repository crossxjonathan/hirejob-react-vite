import React from 'react'
import './card.css'

const Card = ({name, about, position, image}) => {
  return (
    <div>
        <div className='container-card'>
          <div className='circle-frame'/>
          <img className='image-style' src={image} />
          <h1 className='bold-text'>{name}</h1>
          <p className='flex relative left-28 position-style text-gray-400'>{position}</p>
          <p className='flex relative left-20'>{about}</p>
        </div>
    </div>
  )
}

export default Card