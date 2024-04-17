import React from 'react'
import Logo from '../../assets/logo/Group 978 1.png'
import './footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='main-footer'>
                <div className='sub-content'>
                    <div className='logo'>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div className='text-footer text-white'>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                    </div>
                    <div className='line border border-white border-solid' />
                    <div className='copyright-container text-white'>
                        <div className='copyright'>
                            <p>2020 Peworld. All right reserved</p>
                        </div>
                        <div className='number flex -mt-8 text-white'>
                            <p>Telepon</p>
                        </div>
                        <div className='email flex -mt-7 text-white'>
                            <p>Email</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer