
import React from 'react'
import { Link } from 'react-router-dom'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// Import API_PATH
import { API_PATH } from '../../utils/constants'

// import imgs and icons
import siteLogo from "../../assets/icons/site-logo.svg"
import arrowDown from "../../assets/icons/arrow_bottom.svg"
import arrowDownLang from "../../assets/icons/arrow-bottom-lang.svg"
import phone from "../../assets/icons/mobile.svg"
import web from "../../assets/icons/web.svg"
import crm from "../../assets/icons/crm.svg"
import bot from "../../assets/icons/bot.svg"
import portfolioImgOne from "../../assets/images/portfolio-img-1.jpg"
import portfolioImgTwo from "../../assets/images/portfolio-img-2.jpg"
import portfolioImgThree from "../../assets/images/portfolio-img-3.jpg"
import portfolioImgFour from "../../assets/images/portfolio-img-4.jpg"
import portfolioClickImg from "../../assets/images/portfolio-click-img.jpg"
import portfolioClickImgMini from "../../assets/images/portfolio-click-img-2.jpg"
import axon from "../../assets/images/axon.png"
import jetstar from "../../assets/images/jestar.png"
import expedia from "../../assets/images/expedia.png"
import qantas from "../../assets/images/qantas.png"
import litaliya from "../../assets/images/litai.png"
import componyImg from "../../assets/images/compony-logo.svg"
import callImg from "../../assets/icons/call-img.png"
import mobile from "../../assets/icons/phone.svg"
import user from "../../assets/icons/user.svg"
import message from "../../assets/icons/message.svg"
import phoneBottom from "../../assets/icons/phoneFooter.svg"
import map from "../../assets/icons/map.svg"
import burger from "../../assets/icons/openBurger.svg"
import burgerPhone from "../../assets/icons/phoneBurger.svg"

import './index.scss'
const Main = () => {

  const languages = ["EN", "RU", "UZ"]
  const [langIndex, setLangIndex] = React.useState(0)
  const [service, setService] = React.useState([])
  const [about, setAbout] = React.useState([])
  const [achi, setAchi] = React.useState([])
  const [portfolio, setPortfolio] = React.useState([])
  const [portIndex, setPortIndex] = React.useState([])
  const [clients, setClients] = React.useState([])
  const [team, setTeam] = React.useState([])
  const [test, setTest] = React.useState([])

  React.useEffect(() => {
    const getService = async () => {
      try {
        const res = await fetch(`${API_PATH}/${String(languages[langIndex]).toLowerCase()}/servise/services-list`, {
          method: "GET",
          headers: {
            "accept": 'application/json',
            'X-CSRFToken': 'yobVZfYZbAOc5BJQLaHLKAwJYFPXefbeuaTNncv0w4WVye6LsBOoKj6ZKQon81mN'
          }
        }
        );
        const data = await res.json();
        setService([...data])
      } catch (error) {
        console.log(error.message);
      }
    }

    const getAbout = async () => {
      try {
        const res = await fetch(`${API_PATH}/${String(languages[langIndex]).toLowerCase()}/common/about_us-list`, {
          method: "GET",
          headers: {
            "accept": 'application/json',
            'X-CSRFToken': 'yobVZfYZbAOc5BJQLaHLKAwJYFPXefbeuaTNncv0w4WVye6LsBOoKj6ZKQon81mN'
          }
        })

        const data = await res.json()
        setAbout(data)
      } catch (error) {
        console.log(error.message)
      }
    }

    const getAchi = async () => {
      try {
        const res = await fetch(`${API_PATH}/${String(languages[langIndex]).toLowerCase()}/common/achievements-list`, {
          method: "GET",
          headers: {
            "accept": 'application/json',
            'X-CSRFToken': 'yobVZfYZbAOc5BJQLaHLKAwJYFPXefbeuaTNncv0w4WVye6LsBOoKj6ZKQon81mN'
          }
        })

        const data = await res.json()
        setAchi(data)
      } catch (error) {
        console.log(error.message)
      }
    }

    const getPortfolio = async () => {
      try {
        const res = await fetch(`${API_PATH}/${String(languages[langIndex]).toLowerCase()}/portfolio/partfolio-list`, {
          method: "GET",
          headers: {
            "accept": 'application/json',
            'X-CSRFToken': 'yobVZfYZbAOc5BJQLaHLKAwJYFPXefbeuaTNncv0w4WVye6LsBOoKj6ZKQon81mN'
          }
        })

        const data = await res.json()
        setPortfolio(data)
      } catch (error) {
        console.log(error.message)
      }
    }

    const getClients = async () => {
      try {
        const res = await fetch(`${API_PATH}/${String(languages[langIndex]).toLowerCase()}/common/clients-list`, {
          method: "GET",
          headers: {
            "accept": 'application/json',
            'X-CSRFToken': 'yobVZfYZbAOc5BJQLaHLKAwJYFPXefbeuaTNncv0w4WVye6LsBOoKj6ZKQon81mN'
          }
        })

        const data = await res.json()
        setClients(data)
      } catch (error) {
        console.log(error.message)
      }
    }

    const getTeam = async () => {
      try {
        const res = await fetch(`${API_PATH}/${String(languages[langIndex]).toLowerCase()}/ourteam/team-list`, {
          method: "GET",
          headers: {
            "accept": 'application/json',
            'X-CSRFToken': 'yobVZfYZbAOc5BJQLaHLKAwJYFPXefbeuaTNncv0w4WVye6LsBOoKj6ZKQon81mN'
          }
        })

        const data = await res.json()
        setTeam([...data])
      } catch (error) {
        console.log(error.message)
      }
    }

    const getTest = async () => {
      try {
        const res = await fetch(`${API_PATH}/${String(languages[langIndex]).toLowerCase()}/common/testimonials-list`, {
          method: "GET",
          headers: {
            "accept": 'application/json',
            'X-CSRFToken': 'yobVZfYZbAOc5BJQLaHLKAwJYFPXefbeuaTNncv0w4WVye6LsBOoKj6ZKQon81mN'
          }
        })

        const data = await res.json()
        setTest([...data])
      } catch (error) {
        console.log(error.message)
      }
    }

    getTest();
    getTeam();
    getClients();
    getPortfolio();
    getService();
    getAchi();
    getAbout();
  }, [langIndex])

  const [carucelGap, setCarucelGap] = React.useState(87)
  const [carucelSlidePerview, setCarucelSlidePerview] = React.useState(3)

  const handleClick = () => {
    const dropdown = document.querySelector('.site-header__end-lang-dropdown')
    dropdown.classList.toggle('display-block')
  }

  const handleDropdown = () => {
    const dropdown = document.querySelector('.site-header__nav-dropdown')
    dropdown.classList.toggle('display-block')
  }

  const openPortfolio = () => {
    const card = document.querySelector(".portfolio-section__list")
    const click = document.querySelector(".portfolio-section__click-block")
    card.classList.toggle("display-none")
    click.classList.toggle("display-flex")
  }

  React.useEffect(() => {
    if (window.innerWidth <= 980 && window.innerWidth >= 890) {
      setCarucelGap(40)
    } else if (window.innerWidth < 890) {
      setCarucelSlidePerview(2)
      setCarucelGap(50)
    }
  }, [])

  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const [phone, name] = evt.target.elements;
    const newObj = {
      name: name.value,
      phone: phone.value
    }

    try {
      const res = await fetch("http://backend.primetechgroup.uz/uz/common/appeals-create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "'X-CSRFToken": "cxbcuRWEiZZFloK30XAI5QOpTmfn7qxJ8jT4SOtFDt7oO17YHoHl5zoFFxON1cIi"
        },
        body: JSON.stringify(newObj)
      });

      const data = await res.json()
      console.log(data)
    } catch (error) {
      console.log(error.message)
    }

    evt.target.reset();
  }

  const tests = test.map((item, index) => {
    return (
      <SwiperSlide key={index} className='test-section__item'>
        <h3 className='test-section__item-title'>{item.name}sadas</h3>
        <p className='test-section__item-desc'>{item.description}afsdsfgd</p>
        <img
          className='test-section__item-img'
          src={item.icon}
          alt={item.name}
          width={61}
          height={61}
        />
      </SwiperSlide>
    )
  })

  return (
    <>
      <header className="site-header">
        <div className="container">
          <div className="site-header__wrapper">
            <button className='site-header__burger-btn' data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample"><img src={burger} alt="" /></button>
            <div className="site-header__start">
              <Link to="/" className="site-header__logo-link">
                <img
                  className="site-header__logo"
                  src={siteLogo}
                  alt="Primitech site logo"
                  width="57"
                  height="57" />
              </Link>
            </div>
            <nav className="site-header__nav">
              <ul className="site-header__nav-list">
                <li className="site-header__nav-item">
                  <Link className="site-header__nav-link" to="/">Home</Link>
                </li>
                <li className='site-header__nav-item' onClick={() => handleDropdown()}>
                  <a className="site-header__nav-link" href="#about">About</a>
                  <img
                    className='site-header__nav-link-img'
                    src={arrowDown}
                    alt="Arrow down" />
                  <ul className='site-header__nav-dropdown'>
                    <li className='site-header__nav-dropdown-item'>
                      <Link className='site-header__nav-dropdown-link' to="/clients">Clients</Link>
                    </li>
                    <li className='site-header__nav-dropdown-item'>
                      <Link className='site-header__nav-dropdown-link' to="/ourteam">Our team</Link>
                    </li>
                    <li className='site-header__nav-dropdown-item'>
                      <Link className='site-header__nav-dropdown-link' to="/testimonials">Testimonials</Link>
                    </li>
                  </ul>

                </li>
                <li className="site-header__nav-item">
                  <a className="site-header__nav-link" href='#services'>Service</a>
                </li>
                <li className='site-header__nav-item'>
                  <Link className='site-header__nav-link' to="/portfolio">Portfolio</Link>
                </li>
                <li className='site-header__nav-item'>
                  <a className='site-header__nav-link' href="#achi">Achievements</a>
                </li>
              </ul>
            </nav>

            <div className="site-header__end">
              <div className="site-header__end-lang" onClick={() => handleClick()}>
                <ul className='site-header__end-list'>
                  <li className='site-header__end-item'>
                    {languages[langIndex]}
                  </li>
                </ul>
                <ul className='site-header__end-lang-dropdown'>
                  {
                    languages.map((lang, index) => (
                      <li
                        key={index}
                        className='site-header__end-lang-item'
                        onClick={() => setLangIndex(index)}>
                        {lang}
                      </li>
                    ))
                  }
                </ul>
                <img
                  className='site-header__end-lang-img'
                  src={arrowDownLang}
                  alt="Arrow down"
                  width={12}
                  height={6} />
              </div>
              <a className='site-header__end-num' href="tel: 0000000000">+(000) 000 00 00</a>
            </div>

            <a className='site-header__burger-tel' href="tel:000000000000">
              <img className='site-header__burger-tel-img' src={burgerPhone} alt="Burger tel img" width={35} height={35} />
            </a>
          </div>
        </div>

        <div style={{ background: "black" }} className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
          <div className="site-header__burger">
            <Link to="/" className="site-header__burger-logo-link">
              <img
                className="site-header__logo"
                src={siteLogo}
                alt="Primitech site logo"
                width="57"
                height="57" />
            </Link>
            <ul className='site-header__burger-list'>
              <li className='site-header__burger-item'>
                <Link className='site-header__burger-link' to="/">
                  Home
                </Link>
              </li>
              <li className='site-header__burger-item'>
                <a className='site-header__burger-link' href="#about">
                  About
                </a>
              </li>
              <li className='site-header__burger-item'>
                <a className='site-header__burger-link' href="#service">
                  Service
                </a>
              </li>
              <li className='site-header__burger-item'>
                <a className='site-header__burger-link' href="#portfolio">
                  Portfolio
                </a>
              </li>
              <li className='site-header__burger-item'>
                <a className='site-header__burger-link' href="#achievements">
                  Achievements
                </a>
              </li>
            </ul>
            <a className='site-header__burger-tel' href="tel:000000000">
              <img src={phoneBottom} alt="Phonen bottom" width={24} height={24} />
              +(000) 000 00 00
            </a>
          </div>
        </div>
      </header>

      <main className="site-main">
        <section className="hero-section">
          <div className="container">
            <div className="hero-section__wrapper">
              <h1 className='hero-section__title'>Raqamli muammolarga zamonaviy yechimlar</h1>
              <p className='hero-section__desc'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever </p>
              <div className="hero-section__button-flex">
                <a className='hero-section__connection-btn' href='tel:9989381111881'>
                  Bog’lanish
                </a>
                <Link className='hero-section__more-btn' to="/more">
                  Buyurtma berish
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className='services-section'>
          <div className="container">
            <div className="services-section__wrapper">
              <h2 id='services' className='services-section__title'>Xizmatlar</h2>
              <ul className='services-section__list'>
                {service ? service.map((item, index) => {
                  return (
                    <li key={index} className='services-section__item'>
                      <img
                        className='services-section__item-img'
                        src={item.icon}
                        alt={item.title}
                        width={59}
                        height={59}
                      />

                      <h3 className='services-section__item-title'>{item.title}</h3>
                      <span className='services-section__rectangle-left'></span>
                      <span className='services-section__rectangle-center'></span>
                      <span className='services-section__rectangle-right'></span>
                    </li>
                  )
                }) : "null"}
              </ul>
            </div>
          </div>
        </section>

        <section className='about-section'>
          <div className="container">
            <div className="about-section__wrapper">
              <h2 id="about" className='about-section__title'>Biz haqimizda</h2>
              <iframe
                className='about-section__video'
                src={about?.video}
                title={about?.title}
                frameborder="0"
              ></iframe>
            </div>
          </div>
        </section>

        <section className='achi-section'>
          <div className="container">
            <div className="achi-section__wrapper">
              <h2 id='achi' className='achi-section__title'>Achievements</h2>
              <ul className='achi-section__list'>
                {achi?.map((item, index) => {
                  return (
                    <li key={index} className='achi-section__item'>
                      <span className='achi-section__item-count'>{item.amount}</span>
                      <span className='achi-section__item-diagramma'></span>
                      <span className='achi-section__item-title'>{item.name}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </section>

        <section className='portfolio-section'>
          <div className="container">
            <div className="portfolio-section__wrapper">
              <h2 className='portfolio-section__title'>Portfolio</h2>
              <ul className='portfolio-section__list'>
                {portfolio?.map((item, index) => {
                  return (
                    <li onClick={() => openPortfolio()} key={index} className='portfolio-section__item'>
                      <img onClick={() => setPortIndex(index)} className='portfolio-section__item-img' src={item.image} alt={item.description} />
                    </li>
                  )
                })}
              </ul>

              <div className="portfolio-section__click-block">
                <img
                  className='portfolio-section__click-img'
                  src={portfolio[portIndex]?.image}
                  alt="Portfolio click img"
                  width={1132}
                  height={830}
                />
                <div className="portfolio-section__click-flex">
                  <p className='portfolio-section__click-desc'>{portfolio[portIndex]?.description}</p>
                  <img className='portfolio-section__click-img-right' src={portfolio[portIndex]?.image} alt="" width={440} height={633} />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className='clients-section'>
          <div className="container">
            <div className="clients-section__wrapper">
              <h2 className='clients-section__title'>Clients</h2>
              <ul className='clients-section__list'>
                {clients?.map((item, index) => {
                  return (
                    <li key={index} className='clients-section__item'>
                      <img className='clients-section__item-img' src={item.icon} alt={item.name} width={130} height={130} />
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </section>

        <section className='ourTeam-section'>
          <div className="container">
            <div className="ourTeam-section__wrapper">
              <h2 className='ourTeam-section__title'>Our Team</h2>
              <ul className='ourTeam-section__list'>
                {team?.map((item, index) => {
                  return (
                    <li key={index} className='ourTeam-section__item'>
                      <h3 className='ourTeam-section__item-title'>{item.name}</h3>
                      <span className='ourTeam-section__item-info'>{item.job}</span>
                      <img className='ourTeam-section__item-img' src={item.image} alt={item.name} />
                      <span className="ourTeam-section__overlay"></span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>
        </section>

        <section className='test-section'>
          <div className="container">
            <div className="test-section__wrapper">
              <h2 className='test-section__title'>Testimonials</h2>
            </div>
          </div>
          <Swiper
            style={{ marginTop: "50px" }}
            spaceBetween={carucelGap}
            slidesPerView={carucelSlidePerview}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}

          >
            {tests}
          </Swiper>
        </section>

        <section className='call-section'>
          <div className="container">
            <div className="call-section__wrapper">
              <div className="call-section__start">
                <img className='call-section__start-img' src={callImg} alt="" width={474} height={437} />
              </div>
              <div className="call-section__end">
                <h2 className='call-section__title'>Call us to solve your problem</h2>
                <form onSubmit={(evt) => handleSubmit(evt)} className='call-section__form'>
                  <div className="call-section__form-group">
                    <label className='call-section__form-label' htmlFor="number">Phone number</label>
                    <input className='call-section__form-input' type="text" id='number' name='phone' placeholder='Enter your phone number' required />
                    <img className='call-section__form-img' src={mobile} alt="User icon" />
                  </div>
                  <div className="call-section__form-group">
                    <label className='call-section__form-label' htmlFor="name">Enter your name</label>
                    <input className='call-section__form-input' type="text" id='name' name='name' placeholder='Nafisa' required />
                    <img className='call-section__form-img' src={user} alt="User icon" />
                  </div>

                  <button className='call-section__form-btn'>Confirm</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className='site-footer'>
        <div className="container">
          <div className="site-footer__wrapper">
            <div className="site-footer__top">
              <a className='site-footer__top-logo-link' href="./index.jsx">
                <img
                  className='site-footer__top-logo-img'
                  src={siteLogo}
                  alt="Logo"
                  width={69}
                  height={69}
                />
              </a>
              <ul className='site-footer__top-list'>
                <li className='site-footer__top-item'>
                  <a className='site-footer__top-link' href="./index.jsx">
                    Home
                  </a>
                </li>
                <li className='site-footer__top-item'>
                  <a className='site-footer__top-link' href="#about">
                    About
                  </a>
                  <ul className='site-footer__top-drop-list'>
                    <li className='site-footer__top-drop-item'>
                      <a className='site-footer__top-drop-link' href="#clients">
                        Clients
                      </a>
                    </li>
                    <li className='site-footer__top-drop-item'>
                      <a className='site-footer__top-drop-link' href="#clients">
                        Our team
                      </a>
                    </li>
                    <li className='site-footer__top-drop-item'>
                      <a className='site-footer__top-drop-link' href="#clients">
                        Testimonials
                      </a>
                    </li>
                  </ul>
                </li>
                <li className='site-footer__top-item'>
                  <a className='site-footer__top-link' href="#service">
                    Service
                  </a>
                </li>
                <li className='site-footer__top-item'>
                  <a className='site-footer__top-link' href="#portfolio">
                    Portfolio
                  </a>
                </li>
                <li className='site-footer__top-item'>
                  <a className='site-footer__top-link' href="#achi">
                    Achievements
                  </a>
                </li>
              </ul>
            </div>
            <div className="site-footer__bottom">
              <ul className='site-footer__bottom-list'>
                <li className='site-footer__bottom-item'>
                  <span className='site-footer__bottom-img-color'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM16.64 8.8C16.49 10.38 15.84 14.22 15.51 15.99C15.37 16.74 15.09 16.99 14.83 17.02C14.25 17.07 13.81 16.64 13.25 16.27C12.37 15.69 11.87 15.33 11.02 14.77C10.03 14.12 10.67 13.76 11.24 13.18C11.39 13.03 13.95 10.7 14 10.49C14.0069 10.4582 14.006 10.4252 13.9973 10.3938C13.9886 10.3624 13.9724 10.3337 13.95 10.31C13.89 10.26 13.81 10.28 13.74 10.29C13.65 10.31 12.25 11.24 9.52 13.08C9.12 13.35 8.76 13.49 8.44 13.48C8.08 13.47 7.4 13.28 6.89 13.11C6.26 12.91 5.77 12.8 5.81 12.45C5.83 12.27 6.08 12.09 6.55 11.9C9.47 10.63 11.41 9.79 12.38 9.39C15.16 8.23 15.73 8.03 16.11 8.03C16.19 8.03 16.38 8.05 16.5 8.15C16.6 8.23 16.63 8.34 16.64 8.42C16.63 8.48 16.65 8.66 16.64 8.8Z" fill="currentColor" />
                    </svg>
                  </span>
                  <span className='site-footer__bottom-img-color'>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currenColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z" fill="currentColor" />
                    </svg>
                  </span>
                  <span className='site-footer__bottom-img-color'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_399_1330)">
                        <path d="M11.6029 9.8329L9.3569 8.7849C9.1609 8.6939 8.9999 8.7959 8.9999 9.0129V10.9869C8.9999 11.2039 9.1609 11.3059 9.3569 11.2149L11.6019 10.1669C11.7989 10.0749 11.7989 9.9249 11.6029 9.8329ZM9.9999 0.399902C4.6979 0.399902 0.399902 4.6979 0.399902 9.9999C0.399902 15.3019 4.6979 19.5999 9.9999 19.5999C15.3019 19.5999 19.5999 15.3019 19.5999 9.9999C19.5999 4.6979 15.3019 0.399902 9.9999 0.399902ZM9.9999 13.8999C5.0859 13.8999 4.9999 13.4569 4.9999 9.9999C4.9999 6.5429 5.0859 6.0999 9.9999 6.0999C14.9139 6.0999 14.9999 6.5429 14.9999 9.9999C14.9999 13.4569 14.9139 13.8999 9.9999 13.8999Z" fill="currentColor" />
                      </g>
                      <defs>
                        <clipPath id="clip0_399_1330">
                          <rect width="20" height="20" fill="currentColor" />
                        </clipPath>
                      </defs>
                    </svg>
                  </span>
                  <span className='site-footer__bottom-img-color'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_399_1328)">
                        <path d="M12.9999 9.9999C12.9999 10.7956 12.6838 11.5586 12.1212 12.1212C11.5586 12.6838 10.7956 12.9999 9.9999 12.9999C9.20425 12.9999 8.44119 12.6838 7.87858 12.1212C7.31597 11.5586 6.9999 10.7956 6.9999 9.9999C6.9999 9.8289 7.0179 9.6619 7.0489 9.4999H5.9999V13.4969C5.9999 13.7749 6.2249 13.9999 6.5029 13.9999H13.4979C13.6311 13.9996 13.7588 13.9465 13.8529 13.8522C13.947 13.7579 13.9999 13.6301 13.9999 13.4969V9.4999H12.9509C12.9819 9.6619 12.9999 9.8289 12.9999 9.9999ZM9.9999 11.9999C10.2626 11.9998 10.5227 11.948 10.7654 11.8474C11.0081 11.7468 11.2286 11.5994 11.4143 11.4136C11.6 11.2278 11.7473 11.0072 11.8478 10.7645C11.9483 10.5218 12 10.2616 11.9999 9.9989C11.9998 9.73619 11.948 9.47607 11.8474 9.23338C11.7468 8.9907 11.5994 8.7702 11.4136 8.58448C11.2278 8.39877 11.0072 8.25146 10.7645 8.15099C10.5218 8.05052 10.2616 7.99884 9.9989 7.9989C9.46834 7.99903 8.95955 8.20993 8.58448 8.58519C8.20941 8.96045 7.99877 9.46934 7.9989 9.9999C7.99903 10.5305 8.20993 11.0393 8.58519 11.4143C8.96045 11.7894 9.46934 12 9.9999 11.9999ZM12.3999 7.8999H13.5989C13.6786 7.8999 13.755 7.86833 13.8114 7.8121C13.8678 7.75586 13.8996 7.67956 13.8999 7.5999V6.4009C13.8999 6.32107 13.8682 6.24451 13.8117 6.18806C13.7553 6.13161 13.6787 6.0999 13.5989 6.0999H12.3999C12.3201 6.0999 12.2435 6.13161 12.1871 6.18806C12.1306 6.24451 12.0989 6.32107 12.0989 6.4009V7.5999C12.0999 7.7649 12.2349 7.8999 12.3999 7.8999ZM9.9999 0.399902C7.45382 0.399902 5.01203 1.41133 3.21168 3.21168C1.41133 5.01203 0.399902 7.45382 0.399902 9.9999C0.399902 12.546 1.41133 14.9878 3.21168 16.7881C5.01203 18.5885 7.45382 19.5999 9.9999 19.5999C11.2606 19.5999 12.5089 19.3516 13.6737 18.8691C14.8384 18.3867 15.8967 17.6796 16.7881 16.7881C17.6796 15.8967 18.3867 14.8384 18.8691 13.6737C19.3516 12.5089 19.5999 11.2606 19.5999 9.9999C19.5999 8.73921 19.3516 7.49087 18.8691 6.32614C18.3867 5.16142 17.6796 4.10312 16.7881 3.21168C15.8967 2.32023 14.8384 1.6131 13.6737 1.13066C12.5089 0.648214 11.2606 0.399902 9.9999 0.399902ZM14.9999 13.8889C14.9999 14.4999 14.4999 14.9999 13.8889 14.9999H6.1109C5.4999 14.9999 4.9999 14.4999 4.9999 13.8889V6.1109C4.9999 5.4999 5.4999 4.9999 6.1109 4.9999H13.8889C14.4999 4.9999 14.9999 5.4999 14.9999 6.1109V13.8889Z" fill="currentColor" />
                      </g>
                      <defs>
                        <clipPath id="clip0_399_1328">
                          <rect width="20" height="20" fill="currentColor" />
                        </clipPath>
                      </defs>
                    </svg>

                  </span>
                </li>
                <li className='site-footer__bottom-item'>
                  <img
                    className='site-footer__bottom-mail-img'
                    src={message}
                    alt="Message"
                    width={24}
                    height={24}
                  />
                  <a className='site-footer__bottom-mail-text' href="mailto:info@mail.com">
                    info@mail.com
                  </a>
                </li>
                <li className='site-footer__bottom-item'>
                  <img
                    className='site-footer__bottom-tel-img'
                    src={phoneBottom}
                    alt="Phone footer"
                    width={24}
                    height={24}
                  />
                  <a className='site-footer__bottom-tel' href="tel:00000000">
                    +(000) 000 00 00
                  </a>
                </li>
                <li className='site-footer__bottom-item'>
                  <img
                    className='site-footer__bottom-item-img'
                    src={map}
                    alt="Map icon"
                    width={22}
                    height={22}
                  />
                  <address className='site-footer__bottom-item-address'>Location: Mukumiy street 25, high way</address>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Main