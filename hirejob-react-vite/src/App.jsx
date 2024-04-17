import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//LOGIN & REGISTER
import Login from './pages/login/Login';
import Register from './pages/register/register'
import RegisterRecruitment from './pages/register/registerRecruitment';

// MAIN PAGE
import LandingPage from './pages/landing page/landingPage';
import LandingPagelogin from './pages/landing page/landingpagelogin';

//EDIT PROFILE
import EditCompany from './pages/edit company profile/editCompany';
import EditEmployee from './pages/edit employee profile/editEmployee';

// PROFILE
import Home from './pages/Home/Home';
import Sort from './pages/sort/sort';
import Portofolio from './pages/portofolio profile/portofolio';
import Experience from './pages/portofolio profile/experience';
import ProfileCompany from './pages/edit company profile/ProfileCompany';
import ProfileWorker from './pages/edit employee profile/ProfileWorker';
import LayoutPage from './layout';
import LayoutCompany from '../../layoutCompany';
import PublicLayout from './PublicLayout'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/company' element={<LayoutCompany />}>
          <Route path='home' element={<Home />} />
          <Route path='sort' element={<Sort />} />
          <Route path='profile-perusahaan' element={<ProfileCompany />} />
          <Route path='edit-profile-perusahaan' element={<EditCompany />} />
          <Route path='portofolio' element={<Portofolio />} />
        </Route>
        <Route path='/worker' element={<LayoutPage />}>
          <Route exact path='home' element={<Home />} />
          <Route exact path='sort' element={<Sort />} />
          <Route exact path='profile-pekerja' element={<ProfileWorker />} />
          <Route exact path='edit-profile-pekerja' element={<EditEmployee />} />
          <Route exact path='portofolio' element={<Portofolio />} />
          <Route exact path='pengalaman-kerja' element={<Experience />} />
        </Route>
        <Route path="auth" element={<PublicLayout />}>
          <Route exact path='login' element={<Login />} />
          <Route exact path='register' element={<Register />} />
          <Route exact path='register-recruitment' element={<RegisterRecruitment />} />
        </Route>
        <Route exact path='/' element={<LandingPage />} />
        <Route exact path='landing-page-login' element={<LandingPagelogin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App