import '../../App.css';
import { Col, Container, Row, Offcanvas, Button } from 'react-bootstrap';
import { FaSpa } from "react-icons/fa";

function Energy() {
    return (
        <>
            <section className="energy">
                <div className='et'>
                    <Container>
                        <Row>
                            <Col>
                                <div className='text-center'>
                                    <span>ENJOY YOUR WELLNESS JOURNEY</span>
                                    <h4 className='mt-4'>EVERYTHING YOU NEED TO BRING ENERGY, BODY AND SPIRIT INTO BALANCE</h4>
                                    <p className='mt-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.&nbsp;</p>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
                <div className='eb'>
                    <Container>
                        <Row>
                            <Col xs={12} lg>
                                <div className='eb-img'>
                                    <img src={require(`../../image/asset 46.jpg`)} alt="" width="100%" />
                                    <div className='eb-cont text-center'>
                                        <span><FaSpa /></span>
                                        <h5 className='mb-0 mt-3'>Facial & Skincare</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} lg className='pt-5'>
                                <div className='eb-img'>
                                    <img src={require(`../../image/asset 47.jpg`)} alt="" width="100%" />
                                    <div className='eb-cont text-center'>
                                        <span><FaSpa /></span>
                                        <h5 className='mb-0 mt-3'>Facial & Skincare</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} lg className='pt-5 pt-lg-0'>
                                <div className='eb-img'>
                                    <img src={require(`../../image/asset 49.jpg`)} alt="" width="100%" />
                                    <div className='eb-cont text-center'>
                                        <span><FaSpa /></span>
                                        <h5 className='mb-0 mt-3'>Facial & Skincare</h5>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} lg className='pt-5'>
                                <div className='eb-img'>
                                    <img src={require(`../../image/asset 48.jpg`)} alt="" width="100%" />
                                    <div className='eb-cont text-center'>
                                        <span><FaSpa /></span>
                                        <h5 className='mb-0 mt-3'>Facial & Skincare</h5>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Energy;
