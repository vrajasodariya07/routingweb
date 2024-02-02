import '../../App.css';
import { Col, Container, Row, Offcanvas, Button } from 'react-bootstrap';

function SwissImg() {
    return (
        <>

            <section className='swiss-img'>
                <Container>
                    <Row className='align-items-center'>
                        <Col className='text-center swiss-left order-2 order-lg-1' sm={12} lg>
                            <div className='swiss-cont'>
                                <span>SPORTS & ADVENTURES</span>
                                <h4 className='mt-4 mb-3'>Winter Activities</h4>
                                <p>Snowy Andermatt offers a wide range of winter sports. The modern ski resort is known for its sunny slopes, gentle descents, long, steep runs and deep powder descents. You’ll also find trails for winter hiking, snowshoeing and cross-country skiing.</p>
                                <div className='dis-b'>
                                    <a href="">Discover More</a>
                                </div>
                                <div>
                                    <Row>
                                        <Col className='alti d-md-flex flex-xs-column '>
                                            <div className='p-2'>
                                                <div>180Km</div>
                                                <div className='alti-s'>SKI PISTES</div>
                                            </div>
                                            <div className='p-2'>
                                                <div>33</div>
                                                <div className='alti-s'>LIFTS</div>
                                            </div>
                                            <div className='p-2'>
                                                <div>6Km</div>
                                                <div className='alti-s'>LONGEST DESCENT</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                        <Col sm={12} lg className='order-1 order-lg-2'>
                            <div className='swiss-col1'>
                                <img src={require(`../../image/asset 11.jpeg`)} alt="" className='' />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            <section className='swiss-img'>
                <Container>
                    <Row className='align-items-center'>
                        <Col  sm={12} lg>
                            <div className='swiss-col2'>
                                <img src={require(`../../image/asset 16.jpeg`)} alt=""/>
                            </div>
                        </Col>
                        <Col className='text-center swiss-left' sm={12} lg>
                            <div className='swiss-cont'>
                                <span>ENJOY THE SUNSHINE</span>
                                <h4 className='mt-4 mb-3'>Summer Activities</h4>
                                <p>850 km of hiking trails, 4 cableways, one golf course, several Alpine passes: there are many ways to enjoy your holiday in the Andermatt region – whether hiking, swimming in clear alpine lakes, Or go cycling against the backdrop of the spectacular Alps.</p>
                                <div className='dis-b'>
                                    <a href="">Discover More</a>
                                </div>
                                <div>
                                    <Row>
                                        <Col className='alti d-md-flex flex-xs-column '>
                                            <div className='p-2'>
                                                <div>850Km</div>
                                                <div className='alti-s'>HIKING TRAILS</div>
                                            </div>
                                            <div className='p-2'>
                                                <div>21</div>
                                                <div className='alti-s'>SAC HUTS</div>
                                            </div>
                                            <div className='p-2'>
                                                <div>4</div>
                                                <div className='alti-s'>CABLEWAYS</div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    );
}

export default SwissImg;