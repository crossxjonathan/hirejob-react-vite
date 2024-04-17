import React from 'react';
import './PortofolioPage.css';

import RemainderApp from '../../assets/portofolio/Rectangle 637.png'
import SocialMediaApp from '../../assets/portofolio/Rectangle 638.png'
import ProjectManagementWeb from '../../assets/portofolio/Rectangle 639.png'

import RemainderApp2 from '../../assets/portofolio/Rectangle 640.png'
import SocialMediaApp2 from '../../assets/portofolio/Rectangle 641.png'
import ProjectManagementWeb2 from '../../assets/portofolio/Rectangle 642.png'

const PortofolioPage = () => {
    return (
        <div className='portofolioPage-container'>
            <div className='top-container'>
                <div className='remainderApp'>
                    <img src={RemainderApp} alt="RemainderApp" />
                    <p>Remainder app</p>
                </div>
                <div className='SocialMediaApp'>
                    <img src={SocialMediaApp} alt="SocialMediaApp" />
                    <p>Social media app</p>
                </div>
                <div className='ProjectManagementWeb'>
                    <img src={ProjectManagementWeb} alt="ProjectManagementWeb" />
                    <p>Project management web</p>
                </div>
            </div>
            <div className='bottom-container'>
                <div className='remainderApp'>
                    <img src={RemainderApp2} alt="RemainderApp" />
                    <p>Remainder app</p>
                </div>
                <div className='SocialMediaApp'>
                    <img src={SocialMediaApp2} alt="SocialMediaApp" />
                    <p>Social media app</p>
                </div>
                <div className='ProjectManagementWeb'>
                    <img src={ProjectManagementWeb2} alt="ProjectManagementWeb" />
                    <p>Project management web</p>
                </div>
            </div>
        </div>
    )
}

export default PortofolioPage