import React from 'react';
import './sort.css';

import PurpleBar from '../../components/purple bar/purpleBar';
import SortBar from '../../components/search/sortBar';
import Pagination from '../../components/pagination/pagination';

import map from '../../assets/icon/map-pin (4) 1.png';
import PHP from '../../assets/icon/Rectangle 621.png';
import JAVASCRIPT from '../../assets/icon/Rectangle 622.png';
import HTML from '../../assets/icon/Rectangle 623.png';
import photo1 from '../../assets/image profile/Ellipse 325.svg';
import photo2 from '../../assets/image profile/Ellipse 327.png';
import photo3 from '../../assets/image profile/Ellipse 328.png';
import photo4 from '../../assets/image profile/Ellipse 329.png';
import button from '../../assets/icon/Rectangle 624.png';

const Home = () => {
  return (
    <div>
    <PurpleBar className='purplebar-sort -mt-0'/>
    <SortBar className='sort-container'/>
    <div className='container-sort'>
      <div className='TableSort flex flex-col'>
        <div className='profile1'>
          <p>Louis Tomlinson</p>
          <div className='position1'>
            <p>Web developer</p>
          </div>
          <div className='location1'>
            <p>Lorem ipsum</p>
            <img src={map} alt="map1" />
          </div>
          <div className='skill1'>
            <div className='PHP1'>
            <p>PHP</p>
            <img src={PHP} alt="PHP1" />
            </div>
            <div className='JavaScript1'>
            <p>JavaScript</p>
            <img src={JAVASCRIPT} alt="JavaScript1" />
            </div>
            <div className='HTML1'>
            <p>HTML</p>
            <img src={HTML} alt="HTML1" />
            </div>
          </div>
          <div className='photo1'>
            <img src={photo1} alt="photo1" />
          </div>
          <div className='buttonProfile1'>
            <p>Lihat Profile</p>
            <img src={button} alt="buttonProfile1" />
          </div>
        </div>
        <hr />
        <div className='profile2'>
          <p>Harry Styles</p>
          <div className='position2'>
            <p>Web developer</p>
          </div>
          <div className='location2'>
            <p>Lorem ipsum</p>
            <img src={map} alt="map2" />
          </div>
          <div className='skill2'>
            <div className='PHP2'>
            <p>PHP</p>
            <img src={PHP} alt="PHP2" />
            </div>
            <div className='JavaScript2'>
            <p>JavaScript</p>
            <img src={JAVASCRIPT} alt="JavaScript2" />
            </div>
            <div className='HTML2'>
            <p>HTML</p>
            <img src={HTML} alt="HTML2" />
            </div>
          </div>
          <div className='photo2'>
            <img src={photo2} alt="photo2" />
          </div>
          <div className='buttonProfile2'>
            <p>Lihat Profile</p>
            <img src={button} alt="buttonProfile2" />
          </div>
        </div>
        <hr />
        <div className='profile3'>
          <p>Niall Horan</p>
          <div className='position3'>
            <p>Web developer</p>
          </div>
          <div className='location3'>
            <p>Lorem ipsum</p>
            <img src={map} alt="map3" />
          </div>
          <div className='skill3'>
            <div className='PHP3'>
            <p>PHP</p>
            <img src={PHP} alt="PHP3" />
            </div>
            <div className='JavaScript3'>
            <p>JavaScript</p>
            <img src={JAVASCRIPT} alt="JavaScript3" />
            </div>
            <div className='HTML3'>
            <p>HTML</p>
            <img src={HTML} alt="HTML3" />
            </div>
          </div>
          <div className='photo3'>
            <img src={photo3} alt="photo3" />
          </div>
          <div className='buttonProfile3'>
            <p>Lihat Profile</p>
            <img src={button} alt="buttonProfile3" />
          </div>
        </div>
        <hr />
        <div className='profile4'>
          <p>Liam Payne</p>
          <div className='position4'>
            <p>Web developer</p>
          </div>
          <div className='location4'>
            <p>Lorem ipsum</p>
            <img src={map} alt="map4" />
          </div>
          <div className='skill4'>
            <div className='PHP4'>
            <p>PHP</p>
            <img src={PHP} alt="PHP4" />
            </div>
            <div className='JavaScript4'>
            <p>JavaScript</p>
            <img src={JAVASCRIPT} alt="JavaScript4" />
            </div>
            <div className='HTML4'>
            <p>HTML</p>
            <img src={HTML} alt="HTML4" />
            </div>
          </div>
          <div className='photo4'>
            <img src={photo4} alt="photo4" />
          </div>
          <div className='buttonProfile4'>
            <p>Lihat Profile</p>
            <img src={button} alt="buttonProfile4" />
          </div>
        </div>
      </div>
    </div>
    <Pagination/>
    </div>

  )
}

export default Home