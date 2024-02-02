import '../../App.css';
import { Col, Container, Row, Offcanvas, Button } from 'react-bootstrap';

function Luxury() {
    return (
        <>

            <section className='lux-sec'>
                <Container>
                    <Row>
                        <Col>
                            <div className='text-center lux'>
                                <div>
                                    <span>SWISS HERITAGE MEETS MODERN LUXURY</span>
                                </div>
                                <div className='mt-3'>
                                    <h5 className='m-0'>CozyStay in the heart of the mountains is an architectural masterpiece offering contemporary accommodations with unrivalled ski and hiking trails.</h5>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

        </>
    )
}

export default Luxury;