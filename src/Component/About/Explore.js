import '../../App.css';
import { Col, Container, Row, Offcanvas, Button } from 'react-bootstrap';

function Explore() {
    return (
        <>
            <section className="trip explore">
                <div>
                    <img src={require(`../../image/asset 43.jpg`)} alt="" srcset="" />
                    <div className="trip-cont text-center d-flex flex-column justify-content-center">
                        <Container>
                            <Row>
                                <Col>
                                    <span>ENJOY YOUR STAY AT THE HOTEL</span>
                                    <h4 className='my-3'>Spend your comfortable holiday in the heart of the beautiful Swiss Alps</h4>
                                    <div className='ex-w pb-5'>
                                        <Row>
                                            <Col xs={6} md>
                                                <div className='ex-cont'>
                                                    <span>64</span>
                                                    <p className='mb-0'>GUEST ROOMS</p>
                                                </div>
                                            </Col>
                                            <Col xs={6} md>
                                                <div className='ex-cont'>
                                                    <span>25</span>
                                                    <p className='mb-0'>JUNIOR SUITES</p>
                                                </div>
                                            </Col>
                                            <Col xs={6} md>
                                                <div className='ex-cont'>
                                                    <span>21</span>
                                                    <p className='mb-0'>DELUXE SUITES</p>
                                                </div>
                                            </Col>
                                            <Col xs={6} md>
                                                <div className='ex-cont'>
                                                    <span>18</span>
                                                    <p className='mb-0'>APARTMENTS</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div>
                                        <a href="">Explore Accommodations</a>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Explore;