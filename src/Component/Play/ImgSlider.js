import '../../App.css';
import { Col, Container, Row, Offcanvas, Button } from 'react-bootstrap';

function ImgSlider() {
    return (
        <>
            <section>
                <Row className='g-0'>
                    <Col className='' xs={4} md>
                        <div className='img-slider'>
                            <img src={require(`../../image/asset 21.jpeg`)} alt="" width="100%" />
                        </div>
                    </Col>
                    <Col className='' xs={4} md>
                        <div className='img-slider'>
                            <img src={require(`../../image/asset 22.jpeg`)} alt="" width="100%" />
                        </div>
                    </Col>
                    <Col className='' xs={4} md>
                        <div className='img-slider'>
                            <img src={require(`../../image/asset 23.jpeg`)} alt="" width="100%" />
                        </div>
                    </Col>
                    <Col className='' xs={4} md>
                        <div className='img-slider'>
                            <img src={require(`../../image/asset 37.jpg`)} alt="" width="100%" />
                        </div>
                    </Col>
                    <Col className='' xs={4} md>
                        <div className='img-slider'>
                            <img src={require(`../../image/asset 17.jpeg`)} alt="" width="100%" />
                        </div>
                    </Col>
                    <Col className='' xs={4} md>
                        <div className='img-slider'>
                            <img src={require(`../../image/asset 24.jpeg`)} alt="" width="100%" />
                        </div>
                    </Col> 
                </Row>
            </section>
        </>
    )
}
export default ImgSlider;