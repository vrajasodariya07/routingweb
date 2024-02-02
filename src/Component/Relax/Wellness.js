import '../../App.css';
import { Col, Container, Row, Offcanvas, Button } from 'react-bootstrap';
import { FaPhoneAlt } from "react-icons/fa";

function Wellness() {
    return (
        <>
            <section className='well'>
                <Container>
                    <Row className='align-items-center'>
                        <Col xs={12} lg>
                            <div className='pe-lg-5'>
                                <span>3,000-SQM OASIS FOR WELLNESS & FITNESS</span>
                                <h3 className='my-4'>WELLNESS AT COZYSTAY</h3>
                                <p className='mb-4'>Get away from the hustle and bustle of everyday life and find total relaxation at our resort. Access to a wellness center of over 3,000 square meters including spa, sauna, swimming pool, gym, yoga and pilates classes and more. You’ll find everything you need, from a dedicated fitness studio to an extensive range of fitness equipment. All carefully planned to help you achieve a balance of energy, body and mind.</p>
                                <div className='d-flex mb-5 mb-lg-0'>
                                    <div className='wi me-3'><FaPhoneAlt /></div>
                                    <div>
                                        <span>RESERVATION BY PHONE</span><br></br>
                                        <a href="" className='wa'>+41 22 345 66 77</a>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col>
                            <Row className='g-0'>
                                <Col xs={12} md>
                                    <div className='well-img'>
                                        <img src={require(`../../image/asset 25.jpeg`)} alt="" />
                                    </div>
                                </Col>
                                <Col xs={12} md className='w1 m-0'>
                                    <div className='well-img position-relative pt-5'>
                                        <img src={require(`../../image/asset 45.jpg`)} alt="" />
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Wellness;