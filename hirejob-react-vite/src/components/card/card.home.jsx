import React from 'react'

const CardHome = ({name, photo}) => {
  return (
    <div className='w-52 h-72'>
        <div className='w-full h-36'>
            <img src={photo} alt="photo" />
        </div>
        <div>
            <h1>{name}</h1>
        </div>
    </div>
  )
}

export default CardHome