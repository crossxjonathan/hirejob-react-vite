import React, { useState } from 'react'
import './editEmployee.css'
import API from '../../config/api'

import ProfilePic from '../../assets/image profile/Ellipse 325.svg'
import map from '../../assets/icon/map-pin (4) 1.png'
import SaveButton from '../../assets/vector/Rectangle 319.png'
import CancelButton from '../../assets/vector/Group 1218.png'
import EditProfile from '../../assets/icon/Group 1198.png'

import ImageUpload from '../../assets/icon/Group.png'
import ImageHighRes from '../../assets/icon/Group (1).png'
import ImageSize from '../../assets/icon/expand 2.png'

const EditEmployee = () => {
  const [form, setForm] = useState({
    name: '',
    job_desk: '',
    domicile: '',
    workplace: '',
    description: ''
  })
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const handleEditProfile = () => {
    API.post('/workers/profile', form)
    .then((response) => {
      console.log('Profile berhasil ditambahkan:', response.data);
    })
    .catch((error) => {
      console.log('Gagal menambahkan profile:', error)
    })
  }

  return (
    <div className='editemployee-container'>
      <div className='main-editemployee'>
        <div className='left-container'>
          <div className='absolute w-36'>
            <img src={ProfilePic} alt="ProfilePic" />
            <div className='edit-image cursor-pointer'>
              <img src={EditProfile} alt="EditProfile" />
            </div>
          </div>
          <div className='ProfileName'>
            <h1>Louis Tomlinson</h1>
            <p>Web Developer</p>
            <div className='map'>
              <p>Purwokerto, Jawa Tengah</p>
              <img src={map} alt="map" />
            </div>
            <div className='job'>
              <p>Freelancer</p>
            </div>
            <div className='save-button'>
              <img src={SaveButton} alt="SaveButton" />
              <p>Simpan</p>
            </div>
            <div className='cancel-button'>
              <img src={CancelButton} alt="CancelButton" />
            </div>
          </div>
        </div>
        <div className='right-container'>
          <div className='editemployee-page'>
            <div className='editemployee-title'>
              <h1>Data diri</h1>
              <hr />
            </div>
            <form className='editemployee-form'>
              <div className='name-editemployee'>
                <p>Nama lengkap</p>
                <input type="text" id="name-editemployee" name="name" placeholder="Masukan nama panjang" value={form.name} onChange={handleChange} />
              </div>
              <div className='jobdesk-editemployee'>
                <p>Job desk</p>
                <input type="text" id="Jobdesk-editemployee" name="job_desk" placeholder="Masukan job desk" value={form.job_desk} onChange={handleChange} />
              </div>
              <div className='location-editemployee' >
                <p>Domisili</p>
                <input type="text" id="location-editemployee" name="domicile" placeholder="Masukan domisili" value={form.domicile} onChange={handleChange} />
              </div>
              <div className='workplace-editemployee' >
                <p>Tempat kerja</p>
                <input type="text" id="location-editemployee" name="workplace" placeholder="Masukan tempat kerja" value={form.workplace} onChange={handleChange} />
              </div>
              <div className='description-editemployee' name="description" value={form.description} onChange={handleChange}>
                <div className='label0'>
                  <p>Deskripsi singkat</p>
                </div>
                <input type="text" id="description" name="description"
                  placeholder="Tuliskan deskripsi singkat" />
              </div>
            </form>
          </div>
          <div className='skill-page'>
            <div className='container-skill'>
              <h1>Skill</h1>
              <hr />
              <div className="skill-text">
                <input type="text" id="skill" name="skill" placeholder="Java" />
                <div className="saveSkill">
                  <button onClick="()=>saveSkill()">Simpan</button>
                  <p id="message"></p>
                </div>
              </div>
            </div>
          </div>
          <div className='experiencework-page'>
            <div className='experiencework-container'>
              <h1>Pengalaman kerja</h1>
              <hr />
              <div className="labelPosition">
                <p>Posisi</p>
                <input type="text" id="experience_info" name="experience_info" placeholder="Web Developer" />
              </div>
              <div className='label1'>
                <p>Nama Perusahaan</p>
                <div className="company">
                  <input type="text" id="companyName" name="companyName" placeholder="PT Harus bisa" />
                </div>
                <div className="date">
                  <p>Bulan/Tahun</p>
                  <input type="text" id="date" name="date" placeholder="Januari 2018" />
                </div>
                <div className="desc2">
                  <p>Deskripsi singkat</p>
                </div>
                <div className="description2">
                  <input type="text" id="description" name="description"
                    placeholder="Tuliskan deskripsi singkat" />
                  <div className="linegrey" />
                  <div className="editExperience">
                    <button onClick="">Tambah pengalaman kerja</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='Portofolio-page'>
            <div className='portofoliopage-container'>
              <h1>Portofolio</h1>
              <hr />
              <div className='sub-container'>
                <div className="application-name">
                  <p>Nama aplikasi</p>
                  <input type="text" id="companyName" name="companyName" placeholder="Masukan nama aplikasi" />
                </div>
                <div className="repository-name">
                  <p>Link repository</p>
                  <input type="text" id="sector" name="sector" placeholder="Masukan link repository" />
                </div>
                <div className="options-name">
                  <p>Type portofolio</p>
                  <label className="aplication-mobile">
                    <input type="radio" checked="checked" name="radio" />
                    <span className="checkmark"></span>
                    <p>Aplikasi Mobile</p>
                  </label>
                  <label className="aplication-web">
                    <input type="radio" name="radio" />
                    <span className="checkmark"></span>
                    <p>Aplikasi Web</p>
                  </label>
                </div>
                <div className="upload-container">
                  <p>Upload gambar</p>
                  <div type="file" className="upload-image" >
                    <img src={ImageUpload} alt="upload-image" />
                    <h1>Drag & Drop untuk Upload Gambar Aplikasi Mobile</h1>
                    <p>Atau cari untuk mengupload file dari direktorimu.</p>
                    <div className="image-resolution">
                      <img src={ImageHighRes} alt="image-resolution" />
                      <p>High-Res Image PNG, JPG or GIF</p>
                    </div>
                    <div className="size-image">
                      <img src={ImageSize} alt="size-image" />
                      <p>Size</p>
                      <div className='size-image2'>
                        <p>1080x1920 or 600x800</p>
                      </div>
                      <div className="lined" />
                      <div className="add-portofolio">
                        <button onClick={handleEditProfile}>Tambah portofolio</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditEmployee;