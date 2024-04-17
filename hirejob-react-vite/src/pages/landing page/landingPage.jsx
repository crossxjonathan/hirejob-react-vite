import React from 'react';
import LandingHeader from './../../components/header/landingHeader';
import LandingPageContainer from '../../components/container/Landing Page/landingContent';
import Footer from '../../components/footer/footer';

const landingPage = () => {
  return (
    <div>
      <LandingHeader/>
      <LandingPageContainer/>
      <Footer/>
    </div>
  )
}

export default landingPage