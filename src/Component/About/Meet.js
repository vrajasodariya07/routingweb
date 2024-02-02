import '../../App.css';
import { Col, Container, Row, Offcanvas, Button } from 'react-bootstrap';
import { MdOutlineSlowMotionVideo } from "react-icons/md";


function Meet() {
    return (
        <>
            <section className='video meet'>
                <Container>
                    <Row className='align-items-end text-center'>
                        <Col xs={12} lg>
                            <div className='meet-cont'>
                                <span>SWISS HERITAGE MEETS MODERN LUXURY</span>
                                <h5 className='mt-3 mb-3'>CozyStay in the heart of the mountains is an architectural masterpiece offering contemporary accommodations with unrivalled ski and hiking trails.</h5>
                                <p className=''>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                            </div>
                        </Col>
                    </Row>
                    <Row className='pt-5'>
                        <Col>
                            <div className='vt'>
                                <img src={require(`../../image/asset 54.jpg`)} alt="" width="100%" srcset="" />
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

export default Meet;