import '../../App.css';
import { Col, Container, Row, Offcanvas, Button } from 'react-bootstrap';
import { FaCcPaypal, FaCcMastercard, FaCcVisa, FaCcStripe, FaFacebookF, FaTwitter, FaPinterestSquare, FaYoutube, FaInstagram, FaPaperPlane } from "react-icons/fa";


function Footer() {
    return (
        <>
            <section className='foot-sec'>
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
            </section>
        </>
    )
}

export default Footer;