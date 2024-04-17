import React from 'react';
import './skillPortofolio.css'

import tag1 from '../../assets/vector/Rectangle 621.png'
import tag2 from '../../assets/vector/Rectangle 622.png'
import tag3 from '../../assets/vector/Rectangle 623.png'
import tag4 from '../../assets/vector/Rectangle 631.png'
import tag5 from '../../assets/vector/Rectangle 632.png'
import tag6 from '../../assets/vector/Rectangle 633.png'
import tag7 from '../../assets/vector/Rectangle 634.png'
import tag8 from '../../assets/vector/Rectangle 635.png'
import tag9 from '../../assets/vector/Rectangle 643.png'

const SkillPortofolio = () => {
    return (
        <div className='skill-container'>
            <h1>Skill</h1>
            <div className='phyton'>
                <img src={tag1} alt="tag1" />
                <p>Phyton</p>
            </div>
            <div className='laravel'>
                <img src={tag2} alt="tag2" />
                <p>Laravel</p>
            </div>
            <div className='golang'>
                <img src={tag3} alt="tag3" />
                <p>Golang</p>
            </div>
            <div className='javascript'>
                <img src={tag4} alt="tag4" />
                <p>JavaScript</p>
            </div>
            <div className='php'>
                <img src={tag5} alt="tag5" />
                <p>PHP</p>
            </div>
            <div className='html'>
                <img src={tag6} alt="tag6" />
                <p>HTML</p>
            </div>
            <div className='c'>
                <img src={tag7} alt="tag7" />
                <p>C++</p>
            </div>
            <div className='kotlin'>
                <img src={tag8} alt="tag8" />
                <p>Kotlin</p>
            </div>
            <div className='swift'>
                <img src={tag9} alt="tag9" />
                <p>Swift</p>
            </div>
        </div>
    )
}

export default SkillPortofolio