import React from 'react'
import './editCompany.css'

import ProfilePic from '../../assets/image profile/Ellipse 325.svg'
import map from '../../assets/icon/map-pin (4) 1.png'
import SaveButton from '../../assets/vector/Rectangle 319.png'
import CancelButton from '../../assets/vector/Group 1218.png'
import EditProfile from '../../assets/icon/Group 1198.png'

const EditCompany = () => {
  return (
    <div className='editcompany-container'>
      <div className='main-editcompany'>
        <div className='left-container'>
          <div className='absolute w-36'>
            <img src={ProfilePic} alt="ProfilePic" />
            <div className='edit-image'>
              <img src={EditProfile} alt="EditProfile" />
            </div>
          </div>
          <div className='ProfileName'>
            <h1>PT. Martabat Jaya Abadi</h1>
            <p>Financial</p>
            <div className='map'>
              <p>Purwokerto, Jawa Tengah</p>
              <img src={map} alt="map" />
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
          <div className='editcompany-page'>
            <div className='editcompany-title'>
              <h1>Data diri</h1>
              <hr />
            </div>
            <form className='editcompany-form'>
              <div className='name-editcompany'>
              <p>Nama Perusahaan</p>
                <input type="text" id="name-editemployee" name="name-editemployee" placeholder="Masukan Nama Perusahaan" />
              </div>
              <div className='jobdesk-editcompany'>
              <p>Bidang</p>
                <input type="text" id="jobdesk-editcompany" name="jobdesk-editcompany" placeholder="Masukan bidang perusahaan ex : Financial" />
              </div>
              <div className='location-editcompany'>
              <p>Kota</p>
                <input type="text" id="location-editcompany" name="location-editcompany" placeholder="Masukan kota" />
              </div>
              <div className='description-editcompany'>
                <div className='labeldesc'>
                  <p>Deskripsi singkat</p>
                </div>
                <input type="text" id="description" name="description"
                  placeholder="Tuliskan deskripsi singkat" />
              </div>
              <div className='Email-editcompany'>
              <p>Email</p>
                <input type="text" id="Email-editcompany" name="Email-editcompany" placeholder="Masukan email" />
              </div>
              <div className='Instagram-editcompany'>
              <p>Instagram</p>
                <input type="text" id="Instagram-editcompany" name="Instagram-editcompany" placeholder="Masukan nama Instagram" />
              </div>
              <div className='Telepon-editcompany'>
              <p>Nomor Telepon</p>
                <input type="text" id="Telepon-editcompany" name="Telepon-editcompany" placeholder="Masukan nomor telepon" />
              </div>
              <div className='Linkedin-editcompany'>
              <p>Linkedin</p>
                <input type="text" id="Linkedin-editcompany" name="Linkedin-editcompany" placeholder="Masukan nama Linkedin" />
              </div>
            </form>
          </div>
          {/* <div className='skill-page'>
            <div className='container-skill'>
              <h1>Skill</h1>
              <hr />
              <div className="skill-text">
                <input type="text" id="skill" name="skill" placeholder="Java" />
                <div className="saveSkill">
                  <button onclick="saveSkill()">Simpan</button>
                  <p id="message"></p>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className='experiencework-page'>
            <div className='experiencework-container'>
              <h1>Pengalaman kerja</h1>
              <hr />
              <div className="label">
                <p>Posisi</p>
                <input type="text" id="experience_info" name="experience_info" placeholder="Web Developer" />
              </div>
              <div className='label1'>
                <p>Nama Perusahaan</p>
                <div class="company">
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
                    <button onclick="window.location.href='./'">Tambah pengalaman kerja</button>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className='Portofolio-page'>
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
                  <div className="upload-image">
                    <img src={ImageUpload} alt="upload-image" />
                    <h1>Drag & Drop untuk Upload Gambar Aplikasi Mobile</h1>
                    <p>Atau cari untuk mengupload file dari direktorimu.</p>
                    <div className="image-resolution">
                      <img src={ImageHighRes} alt="image-resolution" />
                      <p>High-Res Image PNG, JPG or GIF</p>
                    </div>
                    <div className="size-image">
                    <img src={ImageSize} alt="size-image"/>
                    <p>Size</p>
                    <div className='size-image2'>
                    <p>1080x1920 or 600x800</p>
                    </div>
                    <div class="lined"/>
                    <div class="add-portofolio">
                        <button onclick="window.location.href='./'">Tambah portofolio</button>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default EditCompany;