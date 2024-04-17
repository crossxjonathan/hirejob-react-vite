import React from 'react';
import './index.css';
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

const LandingPageContainer = () => {
  const login = () => {
    alert('please login first!!')
    window.location.href = '/auth/login';
  }
  return (
    <body>
      <section id='contain'>
        <div className='containerLandingPage'>
          <div className='flex'>
            <h1 className='titleOne'>Talenta terbaik negri untuk perubahan revolusi 4.0</h1>
            <p className='descriptionOne'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
            <div className='starting-button'>
            <button type="buttons1" onClick={login} className="w-34 h-12 focus:outline-none text-white bg-purple-800 hover:bg-purple-900 focus:ring-4 focus:ring-purple-300 font-medium rounded-sm text-md px-5 py-2.5 mb-2 dark:bg-purple-700 dark:hover:bg-purple-800 dark:focus:ring-purple-900">Mulai Dari Sekarang</button>
            </div>
          </div>
          <div className='imageOne'>
            <div className='flex justify-end'>
              <img src={imagesOne} alt="imagesOne" />
            </div>
          </div>
          <div className='talent-container flex'>
            <div class="titleTwo flex">
              <h1>Kenapa harus mencari tallent di peworld</h1>
            </div>
            <div class="descTwo">
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
            <div class="imageTwo">
              <img src={imagesTwo} />
            </div>
          </div>
          <div className='skill-container'>
            <div class="titleThree">
              <h1>Skill Talent</h1>
            </div>
            <div class="descThree">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
            </div>
            <div className='sub-skill1'>
              <div class="skill">
                <p>Java</p>
                <p>Kotlin</p>
                <p>PHP</p>
                <p>JavaScript</p>
                <div class="icon">
                  <img src={Yellow} />
                  <img src={Yellow} />
                  <img src={Yellow} />
                  <img src={Yellow} />
                </div>
              </div>
            </div>
            <div className='sub-skill2'>
              <div class="skill2">
                <p>Golang</p>
                <p>C++</p>
                <p>Ruby</p>
                <p>10+ Bahasa Lainnya</p>
              </div>
              <div class="icon2">
                <img src={Yellow} />
                <img src={Yellow} />
                <img src={Yellow} />
                <img src={Yellow} />
              </div>
              <div class="imageThree">
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
              <button type="buttons2" onClick={login} className="buttonWhite white-btn w-52 h-16 text-center bg-white text-purple-700 font-bold border border-purple-800 rounded-md transition duration-300 relative px-5 py-5">Mulai Dari Sekarang</button>
            </div>
          </div>
          <div className='title-purple'>
            <h1>Lorem ipsum dolor sit amet</h1>
          </div>
        </div>
      </section>
    </body>
  )
}

export default LandingPageContainer