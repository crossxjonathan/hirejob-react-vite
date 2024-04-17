import React from 'react'
import './ContactPerson.css'

import Mail from '../../assets/icon/mail (3) 1.png'
import Instagram from '../../assets/icon/instagram.png'
import Gitlab from '../../assets/icon/gitlab.png'
import Github from '../../assets/icon/github.png'

const ContactPerson = () => {
  return (
    <div className='ContactPersonContainer'>
        <div className='mail'>
            <img src={Mail} alt="Mail" />
            <p>Louistommo@gmail.com</p>
        </div>
        <div className='instagram'>
            <img src={Instagram} alt="instagram" />
            <p>@Louist91</p>
        </div>
        <div className='gitlab'>
            <img src={Gitlab} alt="gitlab" />
            <p>@Louistommo</p>
        </div>
        <div className='github'>
            <img src={Github} alt="github" />
            <p>@Louistommo91</p>
        </div>
    </div>
  )
}

export default ContactPerson