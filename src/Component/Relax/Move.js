import '../../App.css';
import { Col, Container, Row, Offcanvas, Button } from 'react-bootstrap';
import { FaRegClock } from "react-icons/fa";

function Move() {
    return (
        <>
            <section>
                <div className='move-t'>
                    <Container>
                        <Row className='align-items-center'>
                            <Col xs={12} lg className=''>
                                <div>
                                    <img src={require(`../../image/asset 50.jpg`)} alt="" width="100%" />
                                </div>
                            </Col>
                            <Col xs={12} lg className='move-cont pt-4 pt-lg-0 ps-lg-5'>   
                                <span>SOOTHE YOUR SOUL</span>
                                <h3 className='mt-3 mb-3'>SPA TREATMENT</h3>
                                <p className='mb-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                                <div className='mb-2'>
                                    <ul>
                                        <li>Massage, Body Treatment & Facial Treatment</li>
                                        <li>Two Saunas & One Steam bath</li>
                                        <li>Bio- and Finnish saunas</li>
                                    </ul>
                                </div>
                                <div className='pt-4'>
                                    <a href="">Request Information</a>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='move-b'>
                    <Container>
                        <Row className='align-items-center'>
                            <Col xs={12} lg className='move-cont pt-4 pt-lg-0 pe-lg-5 order-2 order-lg-1'>   
                                <span>KEEP UP YOUR HEALTHY ROUTINE</span>
                                <h3 className='mt-3 mb-3'>PERSONAL TRAINING & MOVEMENT</h3>
                                <p className='mb-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                                <h6 className='mb-3'>Opening Hours</h6>
                                <div className='mb-2'>
                                    <ul>
                                        <li><span className='me-2'><FaRegClock /></span>Fitness Center: 7:00 am - 9:00 pm</li>
                                        <li><span className='me-2'><FaRegClock /></span>Yoga Studio: 10:00 am - 9:00 pm</li>
                                    </ul>
                                </div>
                                <div className='pt-4'>
                                    <a href="">Request Information</a>
                                </div>
                            </Col>
                            <Col xs={12} lg className='order-lg-2 order-1'>
                                <div>
                                    <img src={require(`../../image/asset 51.jpg`)} alt="" width="100%" />
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Move;