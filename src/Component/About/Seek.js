import '../../App.css';
import { Col, Container, Row, Offcanvas, Button } from 'react-bootstrap';
import { FaCar, FaWifi } from "react-icons/fa6";
import { MdMiscellaneousServices } from "react-icons/md";
import { GiWashingMachine } from "react-icons/gi";
import { MdFreeBreakfast } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";

function Seek() {
  return (
    <>
      <section className='sec-ess seek'>
        <Container>
          <Row className='align-items-center'>
            <Col xl={6} className='ps-lg-5'>
              <div className='ess'>
                <div>
                  <span>SEEKING A TRULY PEACEFUL EXPERIENCE</span>
                </div>
                <div className='mt-3 mb-3'>
                  <h3 className='m-0'>INDULGE, ESCAPE & RELAX IN THE MOUNTAINS</h3>
                </div>
                <div className=''>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </p>
                </div>
                <div className='pt-4 pb-5 pb-xl-0'>
                    <a href="">Discover More</a>
                </div>
              </div>
            </Col>
            <Col>
              <Row>
                <Col className='ser1 ess-img pt-sm-2 pt-md-0 d-flex align-items-center text-end justify-content-center' >
                  <div>
                    <img src={require(`../../image/asset 20.jpeg`)} alt="" width={'100%'} />
                  </div>
                </Col>
                <Col sm={12} md>
                  <div>
                    <img src={require(`../../image/asset 16.jpeg`)} alt="" width={'100%'} />
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

export default Seek;