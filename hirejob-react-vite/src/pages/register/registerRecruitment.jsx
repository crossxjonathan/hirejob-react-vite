import React, { useState } from 'react'
import RecruitmentButton from '../../components/button/recruitment'
import './registerRecruitment.css'
import { useNavigate } from 'react-router-dom';
import InputText from '../../components/input/inputText';
import axios from 'axios';

const RegisterRecruitment = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        phone: '',
        company: '',
        position: ''
    })
    const navigate = useNavigate();

    const handleRecruitment = () => {
        console.log(form)
        if (form.email === '' || form.password === '' || form.phone === '' || form.name === '' || form.confirm === '') {
            alert('You must fill in all of forms!!!')
            return;
        }

        axios.post(`${import.meta.env.VITE_URL_PEWORD}/recruiters/register`, {
            email: form.email,
            password: form.password,
            name: form.name,
            phone: form.phone,
            company: form.company,
            position: form.position
        })
            .then((res) => {
                console.log(res);
                alert('Registration successful!');
                localStorage.setItem('registeredUser', JSON.stringify(form));
                navigate(`/`);
            })
            .catch((error) => {
                console.log(error);
                alert('Registration failed. Please try again later!!');
            });

    }

    const handleLogin = () => {
        navigate(`/auth/login`)
    }


    return (
        <div id='recruitment' className='rightWrapper'>
            <div className='recruitment-container'>
                <div className='recruitment-title'>
                    <h1>Halo, Pewpeople</h1>
                </div>
                <div className='recruitment-description'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
                </div>
                <form className='form-recruitment'>
                    <div className='name-recruitment'>
                        <InputText
                            value={form.name}
                            label='Nama'
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            placeholder='Masukan nama panjang' />
                    </div>
                    <div className='email-recruitment'>
                        <InputText
                            value={form.email}
                            label='Email'
                            onChange={(e) => setForm({ ...form, email: e.target.value })}
                            placeholder='Masukan alamat email' />
                    </div>
                    <div className='company-recruitment'>
                        <InputText
                            value={form.company}
                            label='Perusahaan'
                            onChange={(e) => setForm({ ...form, company: e.target.value })}
                            placeholder='Masukan nama perusahaan'
                        />
                    </div>
                    <div className='position-recruitment'>
                        <InputText
                            value={form.position}
                            label='Jabatan'
                            onChange={(e) => setForm({ ...form, position: e.target.value })}
                            type='textField'
                            placeholder='Posisi di perusahaan Anda'
                        />
                    </div>
                    <div className='phone-recruitment'>
                        <InputText
                            value={form.phone}
                            label='No handphone'
                            onChange={(e) => setForm({ ...form, phone: e.target.value })}
                            type='number'
                            placeholder='Masukan no handphone' />
                    </div>
                    <div className='password-recruitment'>
                        <InputText
                            value={form.password}
                            label='Kata Sandi'
                            onChange={(e) => setForm({ ...form, password: e.target.value })}
                            type='password'
                            placeholder='Masukan kata sandi' />
                    </div>
                    <div className='confirm-recruitment'>
                        <InputText
                            value={form.confirm}
                            label='Konfirmasi kata sandi'
                            onChange={(e) => setForm({ ...form, confirm: e.target.value })}
                            type='password'
                            placeholder='Masukan konfirmasi kata sandi' />
                    </div>
                    <RecruitmentButton text='Daftar' onClick={handleRecruitment} />
                    <div className='text-login -ml-10'>
                        <p>Anda sudah punya akun? <span onClick={handleLogin}>Masuk disini</span></p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterRecruitment