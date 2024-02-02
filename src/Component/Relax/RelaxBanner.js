import '../../App.css';
import { Col, Container, Row, Offcanvas, Button } from 'react-bootstrap';
import { useState } from 'react';
import { FaAngleDown, FaAngleRight } from "react-icons/fa";
import { RxDragHandleHorizontal } from "react-icons/rx";
import { Link } from 'react-router-dom';


function RelaxBanner() {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return (
        <>
            <section>
                <div className='relaxBanner'>
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
                                                <img src={require(`../../image/asset 13.png`)} alt="" srcset="" />
                                                </Offcanvas.Title>
                                            </Offcanvas.Header>
                                            <Offcanvas.Body className='px-5 py-4'>
                                                <ul className='main'>
                                                    <li><Link to="/">home</Link></li>
                                                    <li><Link to="/stay">stay</Link></li>
                                                    <li><Link to="/about">about us</Link><FaAngleRight /></li>
                                                    <li><Link to="/play">play</Link><FaAngleRight /></li>
                                                    <li><Link to="/relax">relax</Link></li>
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
                                            <li><a href=""><Link to="/">home</Link></a></li>
                                            <li>
                                                <a href=""><Link to="/stay">stay<FaAngleDown></FaAngleDown></Link></a>
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
                                            <li><a href=""><Link to="/about">about us</Link></a></li>
                                            <li><a href=""><Link to="/play">play</Link></a></li>
                                            <li><a href=""><Link to="/relax">relax</Link></a></li>
                                        </ul>
                                    </Col>
                                    <Col>
                                        <div className='logo'>
                                            <img src={require(`../../image/asset 13.png`)} alt="" className='logoimg'></img>
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
                                            <h1 className='m-0'>WELLNESS & FITNESS</h1>
                                            <p className='mt-4'>Obtain a comprehensive stretching of physical and mental.</p>
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </div>
                    </div>
                    <div className='black-s'></div>
                </div>
            </section>
        </>
    )
}

export default RelaxBanner;