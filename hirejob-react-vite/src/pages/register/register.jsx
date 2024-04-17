import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './register.css'
import Register from '../../components/button/register'
import InputText from '../../components/input/inputText'
import axios from 'axios'

const register = () => {
  const navigate = useNavigate();
  const [passwordMismatch, setPasswordMismatch] = useState(false);
  const [form, setForm] = useState({
    email: '',
    password: '',
    phone: '',
    name: '',
    confirm: ''
  })
  const handleRegister = () => {
    console.log(form);
    if (form.email === '' || form.password === '' || form.phone === '' || form.name === '' || form.confirm === '') {
      alert('You must fill in all forms!!!');
      return;
    }

    if (form.password !== form.confirm) {
      setPasswordMismatch(true);
      alert('Your password is not match, please check again!!')
      return;
    }

    axios.post(`${import.meta.env.VITE_URL_PEWORD}/workers/register`, {
      email: form.email,
      password: form.password,
      name: form.name,
      phone: form.phone
    })
      .then((res) => {
        console.log(res);
        alert('Registration successful!');
        localStorage.setItem('registerUser', JSON.stringify(form));
        navigate(`/`);
      })
      .catch((error) => {
        console.log(error.message);
        alert('Registration failed. Please try again later!!');
      });
  }

  const handleLogin = () => {
    navigate(`/auth/login`)
  }

  return (
    <div id='register-employee' className='rightwrapper'>
      <div className='RegisterEmployee'>
        <div className='title-employee'>
          <h1>Halo, Pewpeople</h1>
        </div>
        <div className='description-employee'>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
        </div>
        <form className='form-register'>
          <div className='name-register'>
            <InputText
              value={form.name}
              label='Nama'
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder='Masukan nama panjang' />
          </div>
          <div className='email-register'>
            <InputText
              value={form.email}
              label='Email'
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder='Masukan alamat email' />
          </div>
          <div className='phone-register'>
            <InputText
              value={form.phone}
              label='No handphone'
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              type='number'
              placeholder='Masukan no handphone' />
          </div>
          <div className='password-register'>
            <InputText
              value={form.password}
              label='Kata Sandi'
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              type='password' placeholder='Masukan kata sandi' />
          </div>
          <div className='confirm-register'>
            <InputText
              value={form.confirm}
              label='Konfirmasi kata sandi'
              onChange={(e) => setForm({ ...form, confirm: e.target.value })}
              type='password'
              placeholder='Masukan konfirmasi kata sandi' />
          </div>
          <Register text='Daftar' onClick={handleRegister} />
          <div className='login-text -ml-10'>
            <p>Anda sudah punya akun? <span onClick={handleLogin}>Masuk disini</span></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default register