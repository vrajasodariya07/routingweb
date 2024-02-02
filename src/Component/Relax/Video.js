import '../../App.css';
import { Col, Container, Row, Offcanvas, Button } from 'react-bootstrap';
import { MdOutlineSlowMotionVideo } from "react-icons/md";


function Video() {
    return (
        <>
            <section className='video'>
                <Container>
                    <Row className='align-items-end'>
                        <Col xs={12} lg>
                            <div>
                                <span>DAY SPA AND INDOOR POOL</span>
                                <h5 className='mt-3 mb-3'>AN IDEAL PLACE FOR RELAXING SPA MOMENTS IN A DREAM SETTING</h5>
                            </div>
                        </Col>
                        <Col xs={12} lg>
                            <div>
                                <p className=''>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellent eu.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='pt-5 pb-5'>
                        <Col>
                            <div className='vt'>
                                <img src={require(`../../image/asset 52.jpg`)} alt="" width="100%" srcset="" />
                                <div className='vi'>
                                    <MdOutlineSlowMotionVideo />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Video;