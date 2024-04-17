import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo/Group 980 1.png'
import './landingHeader.css'


const LandingHeader = () => {
    const login = () => {
        window.location.href = '/auth/login';
    }

    const register = () => {
        window.location.href = '/auth/register';
    }

    return (
        <NavLink className='landingheader-container bg-white px-5'>
            <ul className='logo-landing flex'>
                <li><img src={logo} className='h-10 px-24' alt="logo" /></li>
            </ul>
            <ul className='button-landing flex justify-end'>
                <li className='relative -left-16 -top-2'>
                <button type="button" onClick={login} className="w-20 h-11 relative -top-7 -left-36 text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-900 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-sm text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">Masuk</button>
                <button type="button" onClick={register} className="w-20 h-11 relative -top-20 -left-10 focus:outline-none text-white bg-purple-800 hover:bg-purple-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-sm text-sm px-5 py-2.5 mb-2 dark:bg-purple-700 dark:hover:bg-purple-800 dark:focus:ring-purple-900">Daftar</button>
                </li>
            </ul>
        </NavLink>
    )
}

export default LandingHeader