import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo/Group 980 1.png'
import ButtonLandingPage from '../button/buttonLandingPage';
import ButtonWhiteLanding from '../button/ButtonWhite';
import ButtonLandingHome from '../button/buttonHome';
import './headerLandingLogin.css'


const HeaderLandingLogin = () => {
    const profile = () => {
        window.location.href = '/worker/profile-pekerja';
    }

    const homePage = () => {
        window.location.href = '/worker/home';

    }

    const logout = () => {
        localStorage.clear();
        window.location.href = '/';
    }

    return (
        <NavLink className='landingheaderlogin-container bg-white px-5 py-10'>
            <ul className='logo-landing flex'>
                <li><img src={logo} className='absolute -mt-5' alt="logo" /></li>
            </ul>
            <ul className='homePageButton flex absolute z-10 ml-200 -mt-100'>
                <li>
                    <ButtonLandingHome text='Home' onClick={homePage}/>
                </li>
            </ul>
            <ul className='flex ml-260 -mt-100 z-10'>
                <li>
                <ButtonWhiteLanding text='Log out' onClick={logout}/>
                </li>
            </ul>
            <ul className='flex px-5 -mt-100 z-10'>
                <li>
                <ButtonLandingPage text='Profile' onClick={profile}/>
                </li>
            </ul>
        </NavLink>
    )
}

export default HeaderLandingLogin