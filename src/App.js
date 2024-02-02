// https://cozystay.loftocean.com/mountain-hotel/

import './App.css';

import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Offcanvas, Button } from 'react-bootstrap';
import { RxDragHandleHorizontal } from "react-icons/rx";
import { CiCalendar } from "react-icons/ci";
import { FaCar, FaWifi } from "react-icons/fa6";
import { MdMiscellaneousServices } from "react-icons/md";
import { GiWashingMachine } from "react-icons/gi";
import { MdFreeBreakfast } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";
import { SlPeople } from "react-icons/sl";
import { TbRulerMeasure } from "react-icons/tb";
import { GoPeople } from "react-icons/go";
import { FaBed } from "react-icons/fa";
import { FaBath } from "react-icons/fa";
import { FaCcPaypal, FaCcMastercard, FaCcVisa, FaCcStripe, FaFacebookF, FaTwitter, FaPinterestSquare, FaYoutube, FaInstagram, FaPaperPlane } from "react-icons/fa";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


import { Routes, Route } from "react-router-dom";
import Home from './Component/Home/Home.js';
import Play from './Component/Play/Play.js';
import Stay from './Component/Stay/Stay.js';
import Relax from './Component/Relax/Relax.js';
import About from './Component/About/About.js';



function App() {

  return (

    <div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/play" element={<Play />} />
        <Route path="/stay" element={<Stay />} />
        <Route path="/relax" element={<Relax />} />
        <Route path="/about" element={<About />} />
      </Routes>


      {/* banner start */}

      {/*<section>
        <div className='banner'>
          <div className='head'>
            <div className='top-header d-none d-xl-block'>
              <Container>
                <Row>
                  <Col className=''>
                    <a>RUE DE LAUSANNE, 1202 GENÈVE, SWITZERLAND</a>
                  </Col>
                  <Col>
                    <Row>
                      <Col><a href="">TEL: +41 22 345 67 88</a></Col>
                      <Col><a href="">FAX: +41 22 345 67 89</a></Col>
                      <Col><a href="">BOOKING@COZYSTAY.COM</a></Col>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className='bottom-header'>
              <Container>
                <Row className='align-items-center'>
                  <Col className='d-block d-xl-none'>
                    <div onClick={handleShow} className='btn2'>
                      <RxDragHandleHorizontal></RxDragHandleHorizontal>
                    </div>

                    <Offcanvas show={show} onHide={handleClose}>
                      <Offcanvas.Header closeButton className='pt-5 pb-4 justify-content-evenly align-items-start'>
                        <Offcanvas.Title>
                          <img src={require(`../src/image/asset 13.png`)} alt="" srcset="" />
                        </Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body className='px-5 py-4'>
                        <ul className='main'>
                          <li><a href="">home</a></li>
                          <li><a href="">stay</a></li>
                          <li><a href="">dine<FaAngleRight /></a></li>
                          <li><a href="">play<FaAngleRight /></a></li>
                          <li><a href="">relax</a></li>
                          <li><a href="">pages<FaAngleRight /></a></li>
                          <li><a href="">our blog</a></li>
                        </ul>
                        <div className='add'>
                          <h6 className=''>CozyStay Mountain Hotel</h6>
                          <p>Rue de Lausanne 1098, <br></br>1202 Genève, <br></br>Switzerland</p>
                          <p className='mt-5'>© Copyright CozyStay WordPress Theme for Hotel Booking.</p>
                        </div>
                      </Offcanvas.Body>
                    </Offcanvas>
                  </Col>
                  <Col className='d-none d-xl-block'>
                    <ul className='main-menu justify-content-start'>
                      <li><a href="">home<FaAngleDown></FaAngleDown></a></li>
                      <li>
                        <a href="">stay<FaAngleDown></FaAngleDown></a>
                        <ul className='sub-menu'>
                          <li><a href="">Rooms & Suites</a></li>
                          <li><a href="">Rooms Details - Top Image</a></li>
                          <li><a href="">Rooms Details - Top Gallery</a></li>
                          <li><a href="">Rooms Details - Left Booking Form</a></li>
                          <li><a href="">Cart</a></li>
                          <li><a href="">Checkout</a></li>
                          <li><a href="">My Account</a></li>
                        </ul>
                        </li>
                      <li><a href="">dine<FaAngleDown></FaAngleDown></a></li>
                      <li><a href="">play<FaAngleDown></FaAngleDown></a></li>
                      <li><a href="">relax<FaAngleDown></FaAngleDown></a></li>
                    </ul>
                  </Col>
                  <Col>
                    <div className='logo'>
                      <img src={require(`./image/asset 13.png`)} alt="" className='logoimg'></img>
                    </div>
                  </Col>
                  <Col className='d-none d-xl-block'>
                    <ul className='main-menu lastm justify-content-end'>
                      <li><a href="">page<FaAngleDown></FaAngleDown></a></li>
                      <li><a href="">en<FaAngleDown></FaAngleDown></a></li>
                      <li><a href="" className='btn1 d-none d-xl-block'>reserve now</a></li>
                    </ul>
                  </Col>
                  <Col className=' d-block d-xl-none text-end'>
                    <div className='en'>
                      <p className='m-0'><a href="">EN</a> / <a href="">FR</a></p>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
            <div className='onscreen'>
              <Container>
                <Row>
                  <Col>
                    <div>
                      <span>BOUTIQUE RESORT OFFERING TIMELESS EUROPEAN LUXURY</span>
                      <h1>BOUTIQUE RESORT IN THE HEART OF SWISS ALPS</h1>
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col className='alti d-md-flex flex-xs-column '>
                    <div className='p-2'>
                      <div>1200M</div>
                      <div className='alti-s'>LOWEST ALTITUDE</div>
                    </div>
                    <div className='p-2'>
                      <div>2418M</div>
                      <div className='alti-s'>HIGHEST ALTITUDE</div>
                    </div>
                    <div className='p-2'>
                      <div>50KM</div>
                      <div className='alti-s'>SLOPES</div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
          <div className='black-s'></div>
        </div>
      </section>*/}

      {/* banner end */}


      {/* LUXURY start */}

      {/* <section className='lux-sec'>
        <Container>
          <Row>
            <Col>
              <div className='text-center lux'>
                <div>
                  <span>SWISS HERITAGE MEETS MODERN LUXURY</span>
                </div>
                <div className='mt-3'>
                  <h5 className='m-0'>CozyStay in the heart of the mountains is an architectural masterpiece offering contemporary accommodations with unrivalled ski and hiking trails.</h5>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* LUXURY end */}


      {/* SLIDER1 start */}

      {/* <section className='slider1'>
        <OwlCarousel className='owl-theme' loop margin={0} {...slid} center={true} nav>
          <div class='item'>
            <img src={require(`./image/asset 19.jpeg`)} alt="" className='img-contex' width={'100%'}></img>
          </div>
          <div class='item'>
            <img src={require(`./image/asset 20.jpeg`)} alt="" className='img-contex' width={'100%'}></img>
          </div>
          <div class='item'>
            <img src={require(`./image/asset 15.jpeg`)} alt="" className='img-contex' width={'100%'}></img>
          </div>
          <div class='item'>
            <img src={require(`./image/asset 16.jpeg`)} alt="" className='img-contex' width={'100%'}></img>
          </div>
          <div class='item'>
            <img src={require(`./image/asset 17.jpeg`)} alt="" className='img-contex' width={'100%'}></img>
          </div>
          <div class='item'>
            <img src={require(`./image/asset 18.jpeg`)} alt="" className='img-contex' width={'100%'}></img>
          </div>
        </OwlCarousel>
      </section> */}

      {/* SLIDER1 end */}


      {/* ALPINE start */}

      {/* <section className='alp-sec'>
        <Container>
          <Row>
            <Col>
              <div className='text-center alp'>
                <div>
                  <span>SWISS HERITAGE MEETS MODERN LUXURY</span>
                </div>
                <div className='mt-3'>
                  <h3 className='m-0'>YOUR HOLIDAY PARADISE</h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* ALPINE end */}


      {/* paid start */}

      {/* <section className='paid'>
        <Row>
          <Col xs={12} sm={6} lg>
            <div>
              <div className='paid-img'>
                <img src={require(`./image/asset 21.jpeg`)} alt="" width={'100%'} />
                <div className="img-cont d-flex flex-column justify-content-between">
                  <div className=''>
                    <div className='m-0 d-inline-block money'>$180 / PERSON</div>
                  </div>
                  <div className='tour-info'>
                    <span>OUTDOORS</span>
                    <h6>Winter Hiking</h6>
                    <span><a href="">DISCOVER TRIP</a></span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} lg>
            <div className='pt-5'>
              <div className='paid-img'>
                <img src={require(`./image/asset 22.jpeg`)} alt="" width={'100%'} />
                <div className="img-cont d-flex flex-column justify-content-between">
                  <div className=''>
                    <div className='m-0 d-inline-block money'>$180 / PERSON</div>
                  </div>
                  <div className='tour-info'>
                    <span>OUTDOORS</span>
                    <h6>Winter Hiking</h6>
                    <span><a href="">DISCOVER TRIP</a></span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} lg>
            <div>
              <div className='paid-img'>
                <img src={require(`./image/asset 23.jpeg`)} alt="" width={'100%'} />
                <div className="img-cont d-flex flex-column justify-content-between">
                  <div className=''>
                    <div className='m-0 d-inline-block money'>$180 / PERSON</div>
                  </div>
                  <div className='tour-info'>
                    <span>OUTDOORS</span>
                    <h6>Winter Hiking</h6>
                    <span><a href="">DISCOVER TRIP</a></span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} lg>
            <div className='pt-5'>
              <div className='paid-img'>
                <img src={require(`./image/asset 24.jpeg`)} alt="" width={'100%'} />
                <div className="img-cont d-flex flex-column justify-content-between">
                  <div className=''>
                    <div className='m-0 d-inline-block money'>$180 / PERSON</div>
                  </div>
                  <div className='tour-info'>
                    <span>OUTDOORS</span>
                    <h6>Winter Hiking</h6>
                    <span><a href="">DISCOVER TRIP</a></span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section> */}

      {/* paid end */}


      {/* ESSENTIALS start */}

      {/* <section className='sec-ess'>
        <Container>
          <Row>
            <Col xl={6}>
              <div className='ess'>
                <div>
                  <span>DISCOVER THE SERVICES WE OFFERED</span>
                </div>
                <div className='mt-3'>
                  <h3 className='m-0'>THE ESSENTIALS</h3>
                </div>
              </div>
              <Row>
                <Col className='pt-5'>
                  <div>
                    <Row>
                      <Col sm={6} className='d-flex'>
                        <div className="ess-icon me-3">
                          <FaCar />
                        </div>
                        <div className="ess-cont">
                          <h5>Airport Pick-up Service</h5>
                          <p>Lorem ipsum proin gravida velit auctor sde re sit amet space.</p>
                        </div>
                      </Col>
                      <Col sm={6} className='d-flex'>
                        <div className="ess-icon me-3">
                          <MdMiscellaneousServices />
                        </div>
                        <div className="ess-cont">
                          <h5>Housekeeper Services</h5>
                          <p>Lorem ipsum proin gravida velit auctor sde re sit amet space.</p>
                        </div>
                      </Col>
                      <Col sm={6} className='d-flex'>
                        <div className="ess-icon me-3">
                          <FaWifi />
                        </div>
                        <div className="ess-cont">
                          <h5>Wifi & Internet</h5>
                          <p>Lorem ipsum proin gravida velit auctor sde re sit amet space.</p>
                        </div>
                      </Col>
                      <Col sm={6} className='d-flex'>
                        <div className="ess-icon me-3">
                          <GiWashingMachine />
                        </div>
                        <div className="ess-cont">
                          <h5>Laundry Services</h5>
                          <p>Lorem ipsum proin gravida velit auctor sde re sit amet space.</p>
                        </div>
                      </Col>
                      <Col sm={6} className='d-flex'>
                        <div className="ess-icon me-3">
                          <MdFreeBreakfast />
                        </div>
                        <div className="ess-cont">
                          <h5>Breakfast in Bed</h5>
                          <p>Lorem ipsum proin gravida velit auctor sde re sit amet space.</p>
                        </div>
                      </Col>
                      <Col sm={6} className='d-flex'>
                        <div className="ess-icon me-3">
                          <FaSwimmingPool />
                        </div>
                        <div className="ess-cont">
                          <h5>Swimming Pool</h5>
                          <p>Lorem ipsum proin gravida velit auctor sde re sit amet space.</p>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col>
              <Row>
                <Col sm={12} md>
                  <div>
                    <img src={require(`./image/asset 25.jpeg`)} alt="" width={'100%'} />
                  </div>
                </Col>
                <Col className='ess-img pt-sm-2 pt-md-0'>
                  <div>
                    <img src={require(`./image/asset 26.jpeg`)} alt="" width={'100%'} />
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* ESSENTIALS end */}


      {/* DISCOVER start */}

      {/* <section className='dis-sec'>
        <Container>
          <Row className='d-flex justify-content-center'>
            <Col xs={12} lg>
              <div className='dis'>
                <div>
                  <span>DISCOVER OUR ACCOMMODATIONS</span>
                </div>
                <div className='mt-3'>
                  <h3 className='m-0'>ROOMS. SUITES. VILLE</h3>
                </div>
              </div>
            </Col>
            <Col className='pt-3 pt-lg-0 d-flex justify-content-lg-end align-items-lg-end'>
              <div>
                <a href="" className='text-end'>Explore All Accommodations</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* DISCOVER end */}


      {/* room start */}

      {/* <section className='slider2'>
        <OwlCarousel className='owl-theme' loop margin={0} nav {...slid2}>
          <div class='item'>
            <div className='item-img text-center'>
              <img src={require(`./image/asset 27.jpeg`)} alt="" className='img-contex1' width={'100%'} />
            </div>
            <div className='slid2-cont d-flex flex-column justify-content-center text-center'>
              <div>
                <a href="">Deluxe Room</a>
              </div>
              <div>
                <ul className='d-flex flex-column flex-md-row justify-content-center'>
                  <li><TbRulerMeasure /><span>35 m</span></li>
                  <li><GoPeople /><span>2 Guests</span></li>
                  <li><FaBed /><span>1 Bed</span></li>
                  <li><FaBath /><span>1 Bathroom</span></li>
                </ul>
              </div>
            </div>
            <div className='price'>
              <a href="">FROM $399</a>
            </div>
          </div>
          <div class='item'>
            <div className='item-img text-center'>
              <img src={require(`./image/asset 28.jpeg`)} alt="" className='img-contex1' width={'100%'} />
            </div>
            <div className='slid2-cont d-flex flex-column justify-content-center text-center'>
              <div>
                <a href="">Deluxe Room</a>
              </div>
              <div>
                <ul className='d-flex justify-content-center'>
                  <li><TbRulerMeasure /><span>35 m</span></li>
                  <li><GoPeople /><span>2 Guests</span></li>
                  <li><FaBed /><span>1 Bed</span></li>
                  <li><FaBath /><span>1 Bathroom</span></li>
                </ul>
              </div>
            </div>
            <div className='price'>
              <a href="">$219 / NIGHT</a>
            </div>
          </div>
          <div class='item'>
            <div className='item-img text-center'>
              <img src={require(`./image/asset 29.jpeg`)} alt="" className='img-contex1' width={'100%'} />
            </div>
            <div className='slid2-cont d-flex flex-column justify-content-center text-center'>
              <div>
                <a href="">DSignature Suite</a>
              </div>
              <div>
                <ul className='d-flex justify-content-center'>
                  <li><TbRulerMeasure /><span>35 m</span></li>
                  <li><GoPeople /><span>2 Guests</span></li>
                  <li><FaBed /><span>1 Bed</span></li>
                  <li><FaBath /><span>1 Bathroom</span></li>
                </ul>
              </div>
            </div>
            <div className='price'>
              <a href="">FROM $399</a>
            </div>
          </div>
        </OwlCarousel>
      </section> */}

      {/* room end */}


      {/* event start */}

      {/* <section className='eve-sec'>
        <Container>
          <Row>
            <Col>
              <div className='text-center eve'>
                <div>
                  <span>LOCAL ACTIVITIES & EVENTS</span>
                </div>
                <div className='mt-3'>
                  <h3 className='m-0'>IMMERSE YOURSELF IN A DIVERSE MOUNTAIN RESORT LIFE</h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* event end */}


      {/* event img start */}

      {/* <section className='eve-img-sec'>
        <Container>
          <Row>
            <Col className='px-md-3 px-lg-4' xs={12} md>
              <div>
                <div className='eve-img text-center'>
                  <div className='eve-before'>
                    <img src={require(`./image/asset 30.jpeg`)} alt="" width={'100%'} />
                  </div>
                  <div className='eve-cont pt-4'>
                    <h5 className='mb-3'>Spa &amp; Wellness</h5>
                    <p>In the hotel spa center we offer an exceptional well-being experience combining our expertise, high technology and breathtaking results.</p>
                    <span>Discover More</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col className='pt-5 px-md-3 px-lg-4 pb-5 pb-md-0' xs={12} md>
              <div>
                <div className='eve-img text-center'>
                  <div className='eve-before'>
                    <img src={require(`./image/asset 31.jpeg`)} alt="" width={'100%'} />
                  </div>
                  <div className='eve-cont pt-4'>
                    <h5 className='mb-3'>Summer Week</h5>
                    <p>The Swiss Alps are spectacular in summer, offering some of the best scenery in the world for hiking, biking, rafting and epic drives.</p>
                    <span>Discover More</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col className='px-md-3 px-lg-4' xs={12} md>
              <div>
                <div className='eve-img text-center'>
                  <div className='eve-before'>
                    <img src={require(`./image/asset 32.jpeg`)} alt="" width={'100%'} />
                  </div>
                  <div className='eve-cont pt-4'>
                    <h5 class="cs-cta-title cs-title">5-Star Gastronomic</h5>
                    <p>Extraordinary moments and special occasions are precious. Enjoy a premium suite and dinner for two as well as spa credits with this special offer.</p>
                    <span>Discover More</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section> */}

      {/* event img end */}


      {/* book start */}

      {/* <section className='book-sec'>
        <div>
          <img src={require(`../src/image/asset 33.jpeg`)} alt="" srcset="" />
        </div>
        <div className='book-cont'>
          <Container>
            <Row>
              <Col>
                <div className='text-center'>
                  <span>BOOK YOUR STAY NOW</span>
                  <h6 className='mt-3'>Escape to the beautiful mountains where dreams come true. Immerse yourself in the restorative qualities of nature, far from the disturbances of everyday life. </h6>
                  <div className='book-bot text-start'>
                    <Row>
                      <Col xs={12} xl className='pb-4 pb-xl-0 d-flex'>
                        <div className='book-icon'>
                          <CiCalendar />
                        </div>
                        <div>
                          <div>
                            <label>Check In</label>
                          </div>
                          <div>
                            <label>2023-12-28</label>
                          </div>
                        </div>
                      </Col>
                      <Col className='book ps-xl-5 pb-4 pt-4 pt-xl-0 pb-xl-0 d-flex' xs={12} xl>
                        <div className='book-icon'>
                          <CiCalendar />
                        </div>
                        <div>
                          <div>
                            <label>Check Out</label>
                          </div>
                          <div>
                            <label>2023-12-29</label>
                          </div>
                        </div>
                      </Col>
                      <Col className='ps-xl-5 pb-4 pt-4 pt-xl-0 pb-xl-0 d-flex' xs={12} xl>
                        <div className='book-icon'>
                          <SlPeople />
                        </div>
                        <div>
                          <div>
                            <label>Check In</label>
                          </div>
                          <div>
                            <label>1 Room, 1 Adult, 0 Child</label>
                          </div>
                        </div>
                      </Col>
                      <Col>
                        <div>
                          <a href="">Check Availability</a>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section> */}

      {/* book end */}

      {/* footer start */}

      {/* <section className='foot-sec'>
        <div className='f1'>
          <Container>
            <Row className='foot-b'>
              <Col className='pb-5 px-lg-4 pb-lg-0' sm={12} lg>
                <div className='foot-left'>
                  <h6>COZYSTAY</h6>
                  <p className='mb-0 mt-3'>
                    Established in 1998, CozyStay Hotel is a boutique hotel in the heart of the Swiss Alps, offering contemporary accommodation and unrivaled access to ski and hiking trails, immersing you in an idyllic setting against pristine skies in search of a truly serene experience.
                  </p>
                  <div className='left-icon'>
                    <span><FaCcPaypal /></span>
                    <span><FaCcMastercard /></span>
                    <span><FaCcVisa /></span>
                    <span><FaCcStripe /></span>
                  </div>
                </div>
              </Col>
              <Col className='pb-5 pe-md-4 px-lg-4 pb-lg-0' sm={12} md={6} lg>
                <div className='foot-center'>
                  <h6 className='mb-3'>Reach Out</h6>
                  <div className='mb-4'>
                    <div>Email: booking@cozystay.com</div>
                    <div>Tel: +41 22 345 66 77</div>
                    <div>Fax: +41 22 345 77 89</div>
                    <div>Rue de Lausanne, 1202 Genève, Switzerland</div>
                  </div>
                  <div className='foot-a'>
                    <a href="">GET DIRECTIONS</a>
                  </div>
                </div>
              </Col>
              <Col className='pb-5 ps-md-4 px-lg-4 pb-lg-0' sm={12} md={6} lg>
                <div className="foot-right">
                  <h6>Sign up for newsletter</h6>
                  <div className='input d-flex justify-content-between pb-1'>
                    <input type="text" placeholder='Your Email Address' />
                    <button type='submit'>Subscribe
                      <span className='ms-2'><FaPaperPlane /></span>
                    </button>
                  </div>
                  <div className='mt-3 mb-2'>
                    <input type="checkbox" className='me-1' />  I agree to the Privacy Policy
                  </div>
                  <div className='right-icon mt-4'>Stay Connected:
                    <span><FaFacebookF /></span>
                    <span><FaTwitter /></span>
                    <span><FaPinterestSquare /></span>
                    <span><FaYoutube /></span>
                    <span><FaInstagram /></span>
                  </div>

                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className='foot-end'>
          <Container>
            <Row className='text-center'>
              <Col className='text-lg-start' sm={12} lg>
                <div>
                  <a href="">PRIVACY</a>
                  <a href="">TERMS OF USE</a>
                  <a href="">POLICY</a>
                </div>
              </Col>
              <Col className='text-lg-end' sm={12} lg>
                <div>
                  <p className='mt-4 m-lg-0'>© Copyright CozyStay WordPress Theme for Hotel Booking.</p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section> */}

      {/* footer end */}

    </div>

  );
}

export default App;
