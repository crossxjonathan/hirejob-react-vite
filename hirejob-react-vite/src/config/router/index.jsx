import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from '../../components/private route/index';


//LOGIN & REGISTER
import Login from '../../pages/login/Login';
import Register from '../../pages/register/register';
import RegisterRecruitment from '../../pages/register/registerRecruitment';

// MAIN PAGE
import LandingPage from '../../pages/landing page/landingPage';
import LandingPagelogin from '../../pages/landing page/landingpagelogin';

//EDIT PROFILE
import EditCompany from '../../pages/edit company profile/editCompany';
import EditEmployee from '../../pages/edit employee profile/editEmployee';

// PROFILE
import Home from '../../pages/Home/Home';
import Sort from '../../pages/sort/sort';
import Portofolio from '../../pages/portofolio profile/portofolio';
import Experience from '../../pages/portofolio profile/experience';
import ProfileCompany from '../../pages/edit company profile/ProfileCompany';
import ProfileWorker from '../../pages/edit employee profile/ProfileWorker';
import LayoutPage from '../../layout';
import LayoutCompany from '../../layoutCompany';
import PublicLayout from '../../PublicLayout'


const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/company' element={<LayoutCompany />}>
          <Route path='home' element={
          <PrivateRoute>
          <Home />
          </PrivateRoute>
          } />
          <Route path='sort' element={
          <PrivateRoute>
          <Sort />
          </PrivateRoute>
          } />
          <Route path='profile-perusahaan' element={
          <PrivateRoute>
          <ProfileCompany />
          </PrivateRoute>
          } />
          <Route path='edit-profile-perusahaan' element={
          <PrivateRoute>
          <EditCompany />
          </PrivateRoute>
          } />
          <Route path='portofolio' element={
          <PrivateRoute>
          <Portofolio />
          </PrivateRoute>
          } />
        </Route>
        <Route path='/worker' element={<LayoutPage />}>
          <Route path='home' element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>} />
          <Route path='sort' element={
          <PrivateRoute>
          <Sort />
          </PrivateRoute>
          } />
          <Route path='profile-pekerja' element={
          <PrivateRoute>
          <ProfileWorker />
          </PrivateRoute>
          } />
          <Route path='edit-profile-pekerja' element={
          <PrivateRoute>
          <EditEmployee />
          </PrivateRoute>
          } />
          <Route path='portofolio' element={
          <PrivateRoute>
          <Portofolio />
          </PrivateRoute>
          } />
          <Route path='pengalaman-kerja' element={
          <PrivateRoute>
          <Experience />
          </PrivateRoute>
          } />
        </Route>
        <Route path="auth" element={<PublicLayout />}>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />
          <Route path='register-recruitment' element={<RegisterRecruitment />} />
        </Route>
        <Route path='/' element={<LandingPage />} />
        <Route path='landing-page-login' element={
        <PrivateRoute>
        <LandingPagelogin />
        </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default MainRouter