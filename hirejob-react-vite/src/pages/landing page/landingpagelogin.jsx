import React from 'react';
import HeaderLandingLogin from '../../components/header/headerLandingLogin';
import LandingLoginContainer from '../../components/container/Landing Page/landinglogincontent';
import Footer from '../../components/footer/footer';

const landingPagelogin = () => {
  return (
    <div>
      <HeaderLandingLogin/>
      <LandingLoginContainer/>
      <Footer/>
    </div>
  )
}

export default landingPagelogin