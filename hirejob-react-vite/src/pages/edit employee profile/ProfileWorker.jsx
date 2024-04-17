import React from 'react'
import './ProfileWorker.css'

import ProfilePic from '../../assets/image profile/Ellipse 325.svg'
import map from '../../assets/icon/map-pin (4) 1.png'
import HireButton from '../../assets/vector/Rectangle 319.png'
import SkillPortofolio from '../../components/tag/skill.portofolio'
import ContactPerson from '../../components/contact person/contact.person'
import PortofolioPage from '../../components/portofolio file/portofolio.page'

import EditIcon from '../../assets/icon/Group 1284.png'

const ProfileWorker = () => {
    const experienceWorker = () => {
        window.location.href = '/worker/pengalaman-kerja';
    }
    const editProfileWorker = () => {
        window.location.href = '/worker/edit-profile-pekerja';
    }
    return (
        <div className='profileWorker-container'>
            <div className='main-portofolio'>
                <div onClick={editProfileWorker} className='edit-image'>
                <img src={EditIcon} alt="EditIcon" />
                </div>
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
                        <div className='tag-worker'>
                            <div className='SkillTag'>
                                <SkillPortofolio />
                            </div>
                            <div className='contact-person'>
                                <ContactPerson />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='right-container'>
                <div className='portofolio-page'>
                    <div className='portofolio-title'>
                        <h1>Portofolio</h1>
                        <hr />
                    </div>
                    <div onClick={experienceWorker} className='experience-page'>
                        <div className='experience-title'>
                            <h1>Pengalaman kerja</h1>
                        </div>
                    </div>
                    <div className='portofolio-file'>
                        <PortofolioPage />
                    </div>
                </div>
                <div>
                </div>
            </div>
        </div>
    )
}

export default ProfileWorker;