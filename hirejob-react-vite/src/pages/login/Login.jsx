import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/ReactToastify.css'
import axios from 'axios';
import './login.css'

import InputText from '../../components/input/inputText';
import ButtonClick from '../../components/button/buttonclick';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: ''
  })

  const navigate = useNavigate();

  const handleLogin = (e) => {
    if (e) {
      e.preventDefault();
    }
    console.log(form)
    if (form.email === '' || form.password === '') {
      toast.error('You must fill in both email and password fields!!!')
      return;
    }
  
    axios({
      method: 'POST',
      url: `${import.meta.env.VITE_URL_PEWORD}/auth/login`,
      data: {
        email: form.email,
        password: form.password
      }
    })
      .then((res) => {
        const { token, refreshToken } = res.data.data;
        localStorage.setItem('token', token);
        localStorage.setItem('refreshToken', refreshToken);
        // toast.success('Welcome!!')
        alert('Welcome!!')
        // console.log(res)
        navigate('/landing-page-login')
      })
      .catch((err) => {
        alert('Your email or your password is false, please check again!!')
        console.log(err.response.message);
      })
  }
  
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleRegisterWorker = () => {
    navigate(`/auth/register`)
    // console.log(navigate);
  }

  const handleRegisterCompany = () => {
    navigate(`/auth/register-recruitment`)
    // console.log(navigate);
  }
  return (
    <div id="login" className='rightWrapper'>
      <ToastContainer/>
      <div className='pagecontainer'>
        <div className='title'>
          <h1>Halo, Pewpeople</h1>
        </div>
        <div className='description'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
        </div>
        <form onSubmit={handleLogin} className='form'>
          <div className='email'>
          <InputText
            value={form.email}
            label='Email'
            onChange={handleChange}
            placeholder='Masukan email Anda'
            name="email"
            id="email"
          />
          </div>
          <div className='password'>
          <InputText
            value={form.password}
            label='Password'
            onChange={handleChange}
            type='password'
            placeholder='Masukan kata sandi'
            name="password"
            id='password'
          />
          </div>
          <div className='forget'>
            <p>Lupa kata sandi?</p>
          </div>
        </form>
        <div className='buttonClick'>
        <ButtonClick text='Masuk' onClick={handleLogin} />
        </div>
        <div className='registerClick whitespace-nowrap'>
            <p>Anda belum punya akun?<span onClick={handleRegisterWorker}> Pekerja </span> & <span onClick={handleRegisterCompany}> Perekrut </span></p>
          </div>
      </div>
    </div>
  )
}

export default Login