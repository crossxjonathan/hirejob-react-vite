import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo/Group 980 1.png'
import './headerLandingLogin.css'


const HeaderLandingLogin = () => {
    const profile = () => {
        window.location.href = '/worker/profile-pekerja';
    }

    const homePage = () => {
        window.location.href = '/worker/home';

    }

    return (
        <NavLink className='landingheaderlogin-container bg-white px-5'>
            <ul className='logo-landing flex'>
                <li><img src={logo} className='h-10 px-24' alt="logo" /></li>
            </ul>
            <ul className='homePageButton py-6'>
                <li onClick={homePage}><p>HOME</p></li>
            </ul>
            <ul className='button-landing flex justify-end'>
                <li className='relative -left-16 -top-2'>
                <button type="button" onClick={profile} className="w-24 h-10 relative -top-9 -left-10 focus:outline-none text-white bg-purple-800 hover:bg-purple-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-md text-sm px-5 py-2.5 mb-2 dark:bg-purple-700 dark:hover:bg-purple-800 dark:focus:ring-purple-900">Profile</button>
                </li>
            </ul>
        </NavLink>
    )
}

export default HeaderLandingLogin