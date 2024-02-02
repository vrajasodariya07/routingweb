import '../../App.css';
import { Col, Container, Row, Offcanvas, Button } from 'react-bootstrap';
import { HiPlusSm } from "react-icons/hi";

function Facilities() {
    return (
        <>
            <section className='facilities'>
                <Container>
                    <Row>
                        <Col xs={12} lg>
                            <div className='ft pb-5'>
                                <span>COMFORTABLE STAY EXPERIENCE</span>
                                <h5 className='my-3'>MOST POPULAR FACILITIES</h5>
                                <p className='mb-4 pt-2'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                                <a href="">More About Services</a>
                            </div>
                        </Col>
                        <Col>
                            <Row>
                                <Col xm={12} md>
                                    <div>
                                        <ul>
                                            <li><span><HiPlusSm /></span>High Quality Bed</li>
                                            <li><span><HiPlusSm /></span>Flat Screen TV</li>
                                            <li><span><HiPlusSm /></span>Bathroom with Shower</li>
                                            <li><span><HiPlusSm /></span>Spa Flip Flops</li>
                                            <li><span><HiPlusSm /></span>Bathrobes</li>
                                            <li><span><HiPlusSm /></span>Espresso Machine</li>
                                            <li><span><HiPlusSm /></span>Free WiFi</li>
                                            <li><span><HiPlusSm /></span>Furnished Balcony</li>
                                        </ul>
                                    </div>
                                </Col>
                                <Col xs={12} md>
                                    <div>
                                        <ul>
                                            <li><span><HiPlusSm /></span>Air Conditioning</li>
                                            <li><span><HiPlusSm /></span>Mini Bar</li>
                                            <li><span><HiPlusSm /></span>Refrigerator</li>
                                            <li><span><HiPlusSm /></span>Laundry</li>
                                            <li><span><HiPlusSm /></span>Dining Table</li>
                                            <li><span><HiPlusSm /></span>Safety Deposit Box</li>
                                            <li><span><HiPlusSm /></span>24-Hour Security</li>
                                        </ul>
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

export default Facilities;