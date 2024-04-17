import React from 'react'
import Logo from '../../assets/logo/Group 978 1.png'
import './imagePublic.css'

const ImagePublic = () => {
    return (
        <div className='leftWrapper'>
                <div className='pagecontainer'>
                <div className='logo'>
                    <img src={Logo} alt="logo" />
                </div>
                <div className='text-title ml-16 mt-56'>
                    <h1>Temukan developer berbakat & terbaik di berbagai bidang keahlian</h1>
                </div>
                </div>
            </div>
    )
}

export default ImagePublic