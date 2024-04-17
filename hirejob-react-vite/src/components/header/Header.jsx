import React from 'react';
import logo from './logo/Group 980 1.png';
import profileImg from './image profile/Mask Group.svg';
import notification from './icon/bell (1) 1.png';
import mail from './icon/mail (3) 1.png';
import './header.css'

const Header = () => {
    const profile = () => {
        window.location.href = '/worker/profile-pekerja';
    }
    return (
        <div id='header' className="header-container flex justify-between items-center">
            <div className="logo-header">
                <img src={logo} className="logo-header" alt="Logo" />
            </div>
            <div className="menu-bar">
                <div className="notif">
                    <img src={notification} alt="Notifications" />
                </div>
                <div className="mail">
                    <img src={mail} alt="Messages" />
                </div>
                <div className='profilepic'>
                    <img onClick={profile} src={profileImg} alt="Profile" />
                </div>
            </div>
        </div>
    );
}

export default Header;
