import './App.css';
import uzb from './assets/uzb.jpg'
import rus from './assets/rus.png'
import girl from './assets/girlcha.png'
import boy from './assets/boy.png'
import opa from './assets/opa.png'
import telefon from './assets/telefon.png'
import xarita from './assets/xarita.png'
import contact_bg from './assets/contact_bg.png'
import oka from './assets/oka.png'
import opa2 from './assets/opa2.png'


function App() {
  return (
    <div className="App">
      <div className=' nawbar'>
        <div>
          <img className='img-fluid mx-2' src={rus} alt="" />
          <p className='mt-2'>русский</p>
        </div>
        <div>
          <img className='img-fluid mx-2' src={uzb} alt="" />
          <p className='mt-2'>uzbek</p>
        </div>
      </div>


      <div className='header'>
        <div className=''>
          <div class="row">
            <div className=' col-md-2 col-lg-4 '>
              <div className='head_left'>
                <div className='titles'>
                  <p>OPEN</p>
                  <p className='sub'>MUDDATLI TO'LOV</p>
                </div>
                <div className='head_card'>
                  <p>To'lov xizmatlari, karta va kredit mahsulotlari sohasidagi innovatsion yechimlar.
                    Sodiq mijozlar, maqsadli trafik va qo'shimcha mahsulot aylanmasiga ega bo'ling</p>
                </div>
              </div>
            </div>
            <div className=' col-12 col-md-10 col-lg-8 '>
              <div className='head_right'>
                <div className='card_girl'>
                  <img className='img-fluid girl' src={girl} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section'>
        <div className='container'>
          <div className='row'>
            <div className='sect_1 col-12 my-3'>
              <span>
                <span className='me-3'>-</span> Savdo va xizmat ko'rsatish korxonalari uchun
              </span>
            </div>

            <div className='sect_2 col-12 my-3 justify-content-center justify-content-md-end '>
              <div className='w-50'>
                <span className='first  fs-md-1'>
                  OPEN <span className='text-dark'> muddatli kartasi - </span>
                  Bu biznesingiz o’sishi va rivojlanishi
                </span>
                <div className='my-3'>
                  Biz bilan hamkorlik qilish daromadingizni oshiradi va bozordagi raqobatdosh mavqeingizni mustahkamlaydi.
                  Open mijozlarga qimmatroq xaridlar uchun pul beradi
                </div>
              </div>
            </div>

            <div className='sect_1 col-12 my-3'>
              <span className='text-dark'>
                <span className='sect_1 me-3'>01</span> O'rtacha chekning va foydangizning o’sishi
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className='section2'>
        <div className='sec2_bg'></div>
        <div className='container'>
          <div className='row'>
            <div className='col-8'>
              <div className='row'>
                <div className='col-12 col-md-6'>
                  <div className='left_col6_card'>
                    <div>
                      <div className='d-flex'><p className='me-3 text-secondary'>Muddatli to’lovsiz</p> <p>A muzlatgichi</p></div>
                      <div className='d-flex'><p className='me-3 text-secondary'>Umumiy qiymati</p> <p>5 mln So’m</p></div>
                    </div>

                    <div className='set2_left'>
                      <div className='d-flex align-items-center'><p className='sect2_left_static'>Foyda 20%</p> <p>1 mln So’m</p></div>
                      <div className='d-flex align-items-center'><p className='sect2_left_static2'>Tannarx</p> <p>4 mln So’m</p></div>
                    </div>
                  </div>
                </div>
                <div className='col-12 col-md-6'>
                  <div className='left_col6_card'>
                    <div>
                      <div className='d-flex'><p className='me-3 text-secondary'>Muddatli to’lovsiz</p> <p>A muzlatgichi</p></div>
                      <div className='d-flex'><p className='me-3 text-secondary'>Umumiy qiymati</p> <p>5 mln So’m</p></div>
                    </div>

                    <div className='set2_left2'>
                      <div className='d-flex align-items-center'><p className='sect2_left_statics'>Foyda 20%</p> <p>1 mln So’m</p></div>
                      <div className='d-flex align-items-center'><p className='sect2_left_static3'>Tannarx</p> <p>4 mln So’m</p></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='col-4 d-none d-md-block sect2_col4 p-0'>
              <div className='sect2_imgcard'>
                <img className='' src={boy} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section3'>
        <div className='container'>
          <div className='row'>
            <div className='col-6 sect3_left'>
              <div className='sect_1 my-5 h-25'>
                <span className='text-dark'>
                  <span className='sect_1 me-3'>02</span> Yangi mijozlar va xaridlar sonining oshishi
                </span>
              </div>

              <div className='sect_1 my-5 h-25'>
                <span className='text-dark'>
                  <span className='sect_1 me-3'>03</span> Xavfning yo’qligi
                </span>
              </div>

              <div className='sect_1 my-5 h-25'>
                <span className='text-dark'>
                  <span className='sect_1 me-3'>04</span> Tezkor hisob-kitoblar
                </span>
              </div>
            </div>
            <div className='col-6 sect3_right'>
              <p className='my-5 h-25'>
                Siz faqat Open kartasi orqali amalga oshirilgan xaridlar uchun komissiya to'laysiz. Biz barcha o'zaro hisob-kitoblarni o'zimiz tashkil qilamiz va soliq masalalari bo'yicha mutaxassislaringizga maslahat beramiz
              </p>
              <p className='my-5 h-25'>
                Siz mijozning xaridi uchun to’lovni darhol qabul qilasiz. So’ngra, muddatli to’lov pulini mijoz bankka to’laydi
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='section_image'>
        <div className='sect_img_bg'></div>
        <div className='container'>
          <div className='row'>
            <div className='col-6'>
              <img className='' src={opa} alt="" />
            </div>
            <div className='col-6'>
              <img className='telefon' src={telefon} alt="" />
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
                  <span className='sect_1 me-3'>05</span> Sheriklik marketingi
                </span>
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <div className='sect_1 fs-5 my-5 h-25'>
                <span className='text-dark'>
                  Biz reklamalarda o’z mijozlarimiz haqida gapiramiz, dasturimiz va saytimizda ular haqida ma’lumot ko’rsatamiz
                  Savdolaringizni rag’batlantirish maqsadida turli aksiyalar o’tkazamiz
                </span>
              </div>
            </div>

            <div className='col-12 col-md-6'>
              <div className='sect_1 my-5 h-25'>
                <span className='text-dark'>
                  <span className='sect_1 me-3'>06</span> Sheriklik marketingi
                </span>
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <div className='sect_1 fs-5 my-5 h-25'>
                <span className='text-dark'>
                  Biz reklamalarda o’z mijozlarimiz haqida gapiramiz, dasturimiz va saytimizda ular haqida ma’lumot ko’rsatamiz
                  Savdolaringizni rag’batlantirish maqsadida turli aksiyalar o’tkazamiz
                </span>
              </div>
            </div>

            <div className='col-12 col-md-6'>
              <div className='sect_1 my-5 h-25'>
                <span className='text-dark'>
                  <span className='sect_1 me-3'>07</span> Sheriklik marketingi
                </span>
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <div className='sect_1 fs-5 my-5 h-25'>
                <span className='text-dark'>
                  Biz reklamalarda o’z mijozlarimiz haqida gapiramiz, dasturimiz va saytimizda ular haqida ma’lumot ko’rsatamiz
                  Savdolaringizni rag’batlantirish maqsadida turli aksiyalar o’tkazamiz
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
                <p>Hamkorlar mavjud viloyatlar</p>
              </div>
              <div className='d-flex'>
                <div className='rectangle2 me-3 mt-1'>
                </div>
                <p>Qamrab olish rejalashtirilayotgan viloyatlar</p>
              </div>
            </div>

            <div className='col-12 col-md-6'>
              <div className='sect_1 my-5 h-25'>
                <span className='text-dark'>
                  <span className='sect_1 me-3'>08</span> Sheriklik marketingi
                </span>
              </div>
            </div>
            <div className='col-12 col-md-6'>
              <div className='sect_1 fs-5 my-5 h-25'>
                <span className='text-dark'>
                  Biz reklamalarda o’z mijozlarimiz haqida gapiramiz, dasturimiz va saytimizda ular haqida ma’lumot ko’rsatamiz
                  Savdolaringizni rag’batlantirish maqsadida turli aksiyalar o’tkazamiz
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='section_contact'>
        <div className='contact_bg'>
          <img className='img-fluid' src={contact_bg} alt="" />
        </div>
        <div className='container'>
          <div className='contact_card'>
            <div className='row'>
              <div className=' col-12 col-sm-6'>
                <h5 className='my-4 fs-3'>Hamkorga aylanish</h5>
                <p className='fs-6'>Ushbu shaklni to’ldiring, va biz sizga muddatli <br /> to’lov taqdimotini o’tkazamiz va shartnoma <br /> tuzishga yordam beramiz</p>
              </div>
              <div className=' col-12 col-sm-6'>
                <input className='input-group my-3 p-2' type="text" placeholder='Tashkilot nomi' />
                <input className='input-group my-3 p-2' type="text" placeholder='Tashkilot nomi' />
                <button className='btn btn-outline button input-group my-4 p-3'>Hamkorga aylanish</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='footer_info my-5'>
        <div className='container'>
          <div className='row'>
            <div className='sect_1 col-12 my-3'>
              <span>
                <span className='me-3'>-</span> Savdo va xizmat ko'rsatish korxonalari uchun
              </span>
            </div>

            <div className='col-md-4'>
            </div>
            <div className='sect_2 col-md-8 my-3  justify-content-center '>
              <div className='foot_fs'>
                <span className='first  fs-md-1'>
                  <span className='text-dark'>  Biz karta </span>biznesini rivojlantirish
                  <span className='text-dark'>  uchun yangi </span> imkoniyatlar <span className='text-dark'>
                    taqdim etamiz.</span>
                </span>
                <div className='my-3 text-dark w-100'>
                  Hamkorlik tarmog’imiz va OpenInstallment texnologiyalari asosida kobrendli muddatli to’lov kartasini atigi bir necha xafta ichida ishga tushirish mumkin. Agarda sizda shaxsiy muddatli to’lov tizimingiz yoki marketplace’ingiz bo’lsa, siz OpenInstallment yordamida o’zingizning xizmatingizni va raqobatchi pozitsiyangizni mustahkamlashingiz mumkin
                </div>
              </div>
            </div>

            <div className='col-md-6'>
              <img className='img-fluid' src={oka} alt="" />
            </div>
            <div className='col-md-6'>
              <div className='purple_card'>
                <p>01</p>
                <p className='fs-5'>Faol karta mijozlari sonining oshishi
                  Open mijozlarining hisob-kitob hisobvaraqlari sizning bankingizda ochiladi va yuritiladi</p>
              </div>
            </div>

            <div className='col-md-4'>
              <div className='purple_card'>
                <p>02</p>
                <p className='fs-5'>Faol karta mijozlari sonining oshishi
                  Open mijozlarining hisob-kitob hisobvaraqlari sizning bankingizda ochiladi va yuritiladi</p>
              </div>
            </div>
            <div className='col-md-8'>
              <div className='gray_card'>
                <p>03</p>
                <p className='fs-5'>Yuqori daromad Open kartasi orqali to’lov qilinganda bank up-front kommisiyasiga ega bo’ladi, bu esa oz navbatida 34% gacha NPV’ni ta’minlaydi</p>
              </div>
            </div>

            <div className='col-md-4'></div>
            <div className='col-md-4'>
              <div className='gray_card'>
                <p>04</p>
                <p className='fs-5'>Xavflar pastroq Open kartasi orqali naqd pul yechish bloklangan. Belgilangan limitni faqat hamkor do’konlarda sarflash mumkin</p>
              </div>

            </div>
            <div className='col-md-4 h-75 '>
              <div className='opa2_img_card'>
                <img className='img-fluid ' src={opa2} alt="" />
              </div>
            </div>


            <div className='col-md-6'>
              <div className='gray_card2'>
                <p>05</p>
                <p className='fs-5'>Yuqori daromad Open kartasi orqali to’lov qilinganda bank up-front kommisiyasiga ega bo’ladi, bu esa oz navbatida 34% gacha NPV’ni ta’minlaydi</p>
              </div>
            </div>
            <div className='col-md-6 h-100'>
              <div className='purple_card2'>
                <p>06</p>
                <p className='fs-5'>Faol karta mijozlari sonining oshishi
                  Open mijozlarining hisob-kitob hisobvaraqlari sizning bankingizda ochiladi va yuritiladi</p>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='footer'>
        <div className='row'>
          <div className='col-12 d-flex justify-content-center align-items-center'>
            <div className='foot_info'>
              <p className='fs-5 text-white'>Hamkorlikni muhokama qilish</p>
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
