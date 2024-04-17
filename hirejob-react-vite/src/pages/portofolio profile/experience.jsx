import React from 'react'
import './experience.css'

import ProfilePic from '../../assets/image profile/Ellipse 325.svg'
import map from '../../assets/icon/map-pin (4) 1.png'
import HireButton from '../../assets/vector/Rectangle 319.png'
import SkillPortofolio from '../../components/tag/skill.portofolio'
import ContactPerson from '../../components/contact person/contact.person'
import tokopedia from '../../assets/icon/Rectangle 672.png'

const Experience = () => {
    const portofolioWorker = () => {
        window.location.href = '/worker/portofolio';
    }
    return (
        <div className='experience-container'>
            <div className='main-experience'>
                <div className='left-container'>
                    <div className='absolute w-36'>
                        <img src={ProfilePic} alt="ProfilePic" />
                    </div>
                    <div className='ProfileName'>
                        <h1>Louis Tomlinson</h1>
                        <p>Web Developer</p>
                        <div className='map'>
                            <p>Purwokerto, Jawa Tengah</p>
                            <img src={map} alt="map" />
                        </div>
                        <div className='job'>
                            <p>Freelancer</p>
                        </div>
                        <div className='ProfileAbout'>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                        </div>
                        <div className='hire-button'>
                            <img src={HireButton} alt="HireButton" />
                            <p>Hire</p>
                        </div>
                        <div className='SkillTag'>
                            <SkillPortofolio />
                        </div>
                        <div className='contact-person'>
                            <ContactPerson />
                        </div>
                    </div>
                </div>
                <div onClick={portofolioWorker} className='right-container'>
                    <div className='portofolio-page'>
                        <div className='portofolio-title'>
                            <h1>Portofolio</h1>
                        </div>
                    </div>
                    <div>
                        <div className='experience-page'>
                            <div className='experience-title'>
                                <h1>Pengalaman kerja</h1>
                                <hr />
                            </div>
                            <div className='experience-file'>
                                <div className='engineer'>
                                    <div className='image-engineer'>
                                        <img src={tokopedia} alt="tokopedia" />
                                    </div>
                                    <div className='title-engineer'>
                                        <h1>Engineer</h1>
                                        <p>Tokopedia</p>
                                    </div>
                                    <div className='date-engineer'>
                                        <p>July 2019 - January 2020 <span>6 months</span> </p>
                                    </div>
                                    <div className='about-engineer'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                                    </div>
                                </div>
                                <div className='webdeveloper'>
                                    <div className='image-webdeveloper'>
                                        <img src={tokopedia} alt="tokopedia" />
                                    </div>
                                    <div className='title-webdeveloper'>
                                        <h1>Web Developer</h1>
                                        <p>Tokopedia</p>
                                    </div>
                                    <div className='date-webdeveloper'>
                                        <p>July 2019 - January 2020 <span>6 months</span> </p>
                                    </div>
                                    <div className='about-webdeveloper'>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum erat orci, mollis nec gravida sed, ornare quis urna. Curabitur eu lacus fringilla, vestibulum risus at.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience;