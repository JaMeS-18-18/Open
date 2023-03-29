import './App.css';
import uzb from './assets/uzb.jpg'
import rus from './assets/rus.png'
import girl from './assets/girlcha.png'
import boy from './assets/boy.png'
import opa from './assets/opa.png'
import telefon from './assets/telefon.png'
import xarita from './assets/xarita.png'
import oka from './assets/oka.png'
import opa2 from './assets/opa2.png'
import { useTranslation } from 'react-i18next'

function App() {
  
  const {t, i18n} = useTranslation();

  const changeLanguage = (til) => {
    i18n.changeLanguage(til)
  }

  return (
    <div className="App">
      <div className='container'>
        <div className='nawbar'>
          <div onClick={() => changeLanguage("ru")}>
            <img className='img-fluid mx-2' src={rus} alt="" />
            <p className='mt-2'>русский</p>
          </div>
          <div onClick={() => changeLanguage("uz")}>
            <img className='img-fluid mx-2' src={uzb} alt="" />
            <p className='mt-2'>uzbek</p>
          </div>
        </div>
      </div>

      <div className='header mb-lg-5'>
        <div className=''>
          <div className='container'>
            <div class="row">
              <div className='col-3 col-lg-4  '>
                <div className='head_left '>
                  <div className='titles'>
                    <p>OPEN</p>
                    <p className='sub'>{t("H_title")}</p>
                  </div>
                  <div className='head_card'>
                    <p>{t("H_subtitle")}</p>
                  </div>
                </div>
              </div>

            <div className=' col-9 col-lg-8 opa'>
              <div className='head_right'>
                <div className='head_bg'></div>
                <div className='card_girl'>
                  <img className='img-fluid girl' src={girl} alt="" />
                </div>
              </div>
            </div>
            </div>

          </div>
        </div>
      </div>

      <div className='section'>
        <div className='container'>
          <div className='row'>
            <div className='sect_1  my-3 ps-3'>
              <span>
                <span className='me-3'>-</span>{t("H_3")} </span>
            </div>

            <div className='sect_2  my-3 justify-content-center justify-content-md-end '>
              <div className='for_width'>
                <span className='first  fs-md-1'>
                  OPEN <span className='text-dark'> {t("H_4")} - </span>
                  {t("H_5")}
                </span>
                <div className='my-3 text-dark'>
                {t("H_6")}
                </div>
              </div>
            </div>

            <div className='sect_1  my-3'>
              <span className='text-dark'>
                <span className='sect_1 me-3'>01</span> {t("H_7")}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='section2  mb-5'>
        <div className='sec2_bg'></div>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='row'>
                <div className=' col-6'>
                  <div className='left_col6_card'>
                    <div>
                      <div className='d-flex'><p className='me-3 text-secondary'>{t("H_8")}</p> <p>A {t("H_9")}</p></div>
                      <div className='d-flex'><p className='me-3 text-secondary'>{t("H_10")}</p> <p>5 mln So’m</p></div>
                    </div>

                    <div className='set2_left'>
                      <div className='d-flex align-items-center'><p className='sect2_left_static'>{t("H_11")} 20%</p> <p className='d-none d-sm-flex'>1 mln So’m</p></div>
                      <div className='d-flex align-items-center'><p className='sect2_left_static2'>{t("H_13")}</p> <p className='d-none d-sm-flex'>4 mln So’m</p></div>
                    </div>
                  </div>
                </div>
                <div className=' col-6'>
                  <div className='left_col6_card'>
                    <div>
                      <div className='d-flex'><p className='me-3 text-secondary'>{t("H_8")}</p> <p>B {t("H_9")}</p></div>
                      <div className='d-flex'><p className='me-3 text-secondary'>{t("H_10")}</p> <p>9 mln So’m</p></div>
                    </div>

                    <div className='set2_left2'>
                      <div className='d-flex align-items-center'><p className='sect2_left_statics'>{t("H_11")} 22%</p> <p className='d-none d-sm-flex'>1 mln So’m</p></div>
                      <div className='d-flex align-items-center'><p className='sect2_left_statics2'>{t("H_12")}</p> <p className='d-none d-sm-flex'>0.5 mln So’m</p></div>
                      <div className='d-flex align-items-center'><p className='sect2_left_static3'>{t("H_13")}</p> <p className='d-none d-sm-flex'>4 mln So’m</p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-4 d-none d-lg-block sect2_col4 p-0'>
              <div className='sect2_imgcard'>
                <img className='' src={boy} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section3 mt-5'>
        <div className='container'>
          <div className='row'>
            <div className='col-md-6 sect3_left'>
              <div className='sect_1 my-5 h-25'>
                <span className='text-dark fs-4'>
                  <span className='sect_1 me-3'>02</span> {t("H_14")}
                </span>
              </div>

              <div className='sect_1 my-5 h-25 fs-4'>
                <span className='text-dark'>
                  <span className='sect_1 me-3'>03</span> {t("H_15")}
                </span>
              </div>

              <div className='sect_1 my-5 h-25 fs-4'>
                <span className='text-dark'>
                  <span className='sect_1 me-3'>04</span> {t("H_17")}
                </span>
              </div>
            </div>
            <div className='col-md-6 sect3_right'>
              <p className='my-5 h-25 fs-5'>{t("H_16")}</p>
              <p className='my-5 h-25 fs-5' >
              {t("H_18")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='section_image'>
        <div className='sect_img_bg d-none d-md-flex'></div>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6 d-none d-md-flex '>
              <img className='img-fluid' src={opa} alt="" />
            </div>
            <div className='col-12 col-md-6  card_tel'>
              <img className='telefon img-fluid ' src={telefon} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className='section_info'>
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-md-6'>
              <div className='sect_1 my-5 h-25'>
                <span className='text-dark'>
                  <span className='sect_1 me-3'>05</span> {t("H_19")}
                </span>
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <div className='sect_1 fs-5 my-5 h-25'>
                <span className='text-dark'>
                {t("H_20")}
                </span>
              </div>
            </div>

            <div className='col-12 col-md-6'>
              <div className='sect_1 my-5 h-25'>
                <span className='text-dark'>
                  <span className='sect_1 me-3'>06</span> {t("H_21")}
                </span>
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <div className='sect_1 fs-5 my-5 h-25'>
                <span className='text-dark'>
                {t("H_22")}
                </span>
              </div>
            </div>

            <div className='col-12 col-md-6'>
              <div className='sect_1 my-5 h-25'>
                <span className='text-dark'>
                  <span className='sect_1 me-3'>07</span> {t("H_23")}
                </span>
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <div className='sect_1 fs-5 my-5 h-25'>
                <span className='text-dark'>
                {t("H_24")}
                </span>
              </div>
            </div>

            <div className='col-12 col-md-6'>
              <img className='img-fluid' src={xarita} alt="" />
            </div>
            <div className='col-12 col-md-6 '>
              <div className='d-flex'>
                <div className='rectangle me-3 mt-1'>
                </div>
                <p>{t("H_25")}</p>
              </div>
              <div className='d-flex'>
                <div className='rectangle2 me-3 mt-1'>
                </div>
                <p>{t("H_26")}</p>
              </div>
            </div>

            <div className='col-12 col-md-6'>
              <div className='sect_1 my-5 h-25'>
                <span className='text-dark'>
                  <span className='sect_1 me-3'>08</span> {t("H_27")}
                </span>
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <div className='sect_1 fs-5 my-5 h-25'>
                <span className='text-dark'>
                {t("H_28")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section_contact'>
        
        <div className='container'>
          <div className='contact'>
          <div className='contact_card'>
            <div className='row'>
              <div className=' col-12 col-sm-6'>
                <h5 className='my-4 fs-3'>{t("H_29")}</h5>
                <p className='fs-6'>{t("H_30")}</p>
              </div>
              <div className=' col-12 col-sm-6'>
                <input className='input-group my-3 p-2' type="text" placeholder={t("H_32")} />
                <input className='input-group my-3 p-2' type="text" placeholder={t("H_32")} />
                <button className='btn btn-outline button input-group my-4 p-3'>{t("H_29")}</button>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className='footer_info'>
        <div className='container'>
          <div className='row'>
            <div className='sect_1 col-12 my-3'>
              <span>
                <span className='me-3'>-</span>  {t("H_33")}
              </span>
            </div>

            <div className='col-md-4'>
            </div>
            <div className='sect_2 col-md-8 my-3  justify-content-center '>
              <div className='foot_fs'>
                <span className='first  fs-md-1'>
                  <span className='text-dark'>  {t("H_43")} </span>{t("H_44")}
                  <span className='text-dark'>  {t("H_45")} </span> {t("H_46")} <span className='text-dark'>
                  {t("H_47")}.</span>
                </span>
                <div className='my-3 text-dark w-100'>
                {t("H_35")}
                </div>
              </div>
            </div>

            <div className='col-md-6 p-0'>
              <img className='img-fluid' src={oka} alt="" />
            </div>
            <div className='col-md-6 d-none d-md-block'>
              <div className='purple_card'>
                <p>01</p>
                <p className='fs-5'>{t("H_36")}</p>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='purple_card'>
                <p>02</p>
                <p className='fs-5'>{t("H_37")}</p>
              </div>
            </div>
            <div className='col-md-8'>
              <div className='gray_card'>
                <p>03</p>
                <p className='fs-5'>{t("H_38")}</p>
              </div>
            </div>

            <div className='col-md-4'></div>
            <div className='col-md-4'>
              <div className='gray_card'>
                <p>04</p>
                <p className='fs-5'>{t("H_39")}</p>
              </div>

            </div>
            <div className='col-md-4 h-75 opa'>
              <div className='opa2_img_card'>
                <img className='img-fluid ' src={opa2} alt="" />
              </div>
            </div>


            <div className='col-md-6'>
              <div className='gray_card2'>
                <p>05</p>
                <p className='fs-5'>{t("H_40")}</p>
              </div>
            </div>
            <div className='col-md-6 h-100'>
              <div className='purple_card2'>
                <p>06</p>
                <p className='fs-5'>{t("H_41")}</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='footer mt-5'>
        <div className='row'>
          <div className='col-12 d-flex justify-content-center align-items-center'>
            <div className='foot_info'>
              <p className='fs-5 text-white'>{t("H_42")}</p>
              <p className='fs-5 text-white'> <i class="bi bi-envelope me-3"></i>hello@opentech.uz</p>
              <p className='fs-5 text-white'><i class="bi bi-telephone me-2"></i> +998 (90) 968-7881</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
