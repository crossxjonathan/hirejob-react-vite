import React from 'react';
import './landinglogincontent.css';
import imagesOne from '../../../assets/picture/Group 1195 men.svg'
import imagesTwo from '../../../assets/picture/Group 1194 women.svg'
import imagesThree from '../../../assets/picture/Group 1196 (1) women 2.svg'
import Purple from '../../../assets/icon/purple.png'
import Yellow from '../../../assets/icon/yellow.png'
import ProfileOne from '../../../assets/image profile/Ellipse 320.svg'
import ProfileTwo from '../../../assets/image profile/Ellipse 323.svg'
import ProfileThree from '../../../assets/image profile/Ellipse 325.svg'
import PurpleFrame from '../../../assets/vector/Rectangle 526.png'

import Card from '../../card/index';
import Next from '../../navigation/next';
import Prev from '../../navigation/prev'

const LandingLoginContainer = () => {
  const loginHome = () => {
    window.location.href = '/worker/home';
  }

  return (
    <div>
      <section id='contain'>
        <div className='containerLandingLogin'>
          <div className='flex'>
            <h1 className='titleOne'>Talenta terbaik negri untuk perubahan revolusi 4.0</h1>
            <p className='descriptionOne'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
            <div className='starting-button'>
            <button type="buttons1" onClick={loginHome} className="w-34 h-12 focus:outline-none text-white bg-purple-800 hover:bg-purple-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-sm text-md px-5 py-2.5 mb-2 dark:bg-purple-700 dark:hover:bg-purple-800 dark:focus:ring-purple-900">Mulai Dari Sekarang</button>
            </div>          
            </div>
          <div className='imageOne'>
            <div className='flex justify-end'>
              <img src={imagesOne} alt="imagesOne" />
            </div>
          </div>
          <div className='talent-container flex'>
            <div className="titleTwo flex">
              <h1>Kenapa harus mencari tallent di peworld</h1>
            </div>
            <div className="descTwo">
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
            <div className='iconOne'>
              <img src={Purple} />
              <img src={Purple} />
              <img src={Purple} />
              <img src={Purple} />
            </div>
            <div className="imageTwo">
              <img src={imagesTwo} />
            </div>
          </div>
          <div className='skill-container'>
            <div className="titleThree">
              <h1>Skill Talent</h1>
            </div>
            <div className="descThree">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
            </div>
            <div className='sub-skill1'>
              <div className="skill">
                <p>Java</p>
                <p>Kotlin</p>
                <p>PHP</p>
                <p>JavaScript</p>
                <div className="icon">
                  <img src={Yellow} />
                  <img src={Yellow} />
                  <img src={Yellow} />
                  <img src={Yellow} />
                </div>
              </div>
            </div>
            <div className='sub-skill2'>
              <div className="skill2">
                <p>Golang</p>
                <p>C++</p>
                <p>Ruby</p>
                <p>10+ Bahasa Lainnya</p>
              </div>
              <div className="icon2">
                <img src={Yellow} />
                <img src={Yellow} />
                <img src={Yellow} />
                <img src={Yellow} />
              </div>
              <div className="imageThree">
                <img src={imagesThree} />
              </div>
            </div>
          </div>
          <div className='about-container'>
            <div className='title'>
              <h1>Their opinion about peworld</h1>
            </div>
            <Prev />
            <div className='flex flex-column px-20 py-20 '>
              <div className='cardOne '>
                <Card image={ProfileOne} name="Harry Styles" position="Web Developer" about="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor." />
              </div>
              <div className='cardTwo '>
                <Card image={ProfileTwo} name="Niall Horan" position="Web Developer" about="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
              </div>
              <div className='cardThree '>
                <Card image={ProfileThree} name="Louis Tomlinson" position="Web Developer" about="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
              </div>
              <Next />
            </div>
          </div>
          <div className='rectangle'>
            <img className='px-28 py-20' src={PurpleFrame} />
            <div className='button-purple'>
              <button type="buttons" onClick={loginHome} className="buttonWhite white-btn w-52 h-16 text-center bg-white text-purple-700 font-bold border border-purple-800 rounded-md transition duration-300 relative px-5 py-5 cursor-pointer">Mulai Dari Sekarang</button>
            </div>
          </div>
          <div className='title-purple'>
            <h1>Lorem ipsum dolor sit amet</h1>
          </div>
        </div>
      </section>
    </div>
  )
}

export default LandingLoginContainer