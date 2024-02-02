import '../../App.css';
import { Col, Container, Row, Offcanvas, Button } from 'react-bootstrap';
import { FaRegClock } from "react-icons/fa";


function Space()
{
    return(
        <section className='space'>
            <Container>
                <Row>
                    <Col>
                        <div className='text-center'>
                            <span>COMFORTABLE ROOMS & SPACE</span>
                            <h5 className='mt-3 mb-4'>Explore our refined accommodation options and find the perfect space for your stay.</h5>
                            <p className='mb-4'>All rooms have a bathroom with bathtub and/or shower, cable television/radio, free WIFI and mini bar. In addition, all rooms are equipped with a Nespresso coffee machine. Most rooms are carpeted, some have parquet flooring.</p>
                        </div>
                    </Col>
                </Row>
                <Row className='text-center justify-content-center g-0'>
                    <Col>
                        <div className='pe-5 space-1 d-flex justify-content-end'>
                            <span><FaRegClock /><label className='ms-3'>CHECK IN: 3:00 PM</label></span>
                        </div>
                    </Col>
                    <Col>
                        <div className='ps-5 d-flex justify-content-start'>
                            <span><FaRegClock /><label className='ms-3'>CHECK OUT: 12:00 PM</label></span>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Space;