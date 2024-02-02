import '../../App.css';
import { Col, Container, Row, Offcanvas, Button } from 'react-bootstrap';
import { FaCar, FaWifi } from "react-icons/fa6";
import { MdMiscellaneousServices } from "react-icons/md";
import { GiWashingMachine } from "react-icons/gi";
import { MdFreeBreakfast } from "react-icons/md";
import { FaSwimmingPool } from "react-icons/fa";

function Service() {
  return (
    <>
      <section className='sec-ess service'>
        <Container>
          <Row className='align-items-center'>
            <Col>
              <Row>
                <Col className='ser1 ess-img pt-sm-2 pt-md-0 d-flex align-items-center text-end justify-content-center' >
                  <div>
                    <img src={require(`../../image/asset 26.jpeg`)} alt="" width={'100%'} />
                  </div>
                </Col>
                <Col sm={12} md>
                  <div>
                    <img src={require(`../../image/asset 25.jpeg`)} alt="" width={'100%'} />
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xl={6} className='ps-lg-5'>
              <div className='ess pt-5 pt-xl-0'>
                <div>
                  <span>DISCOVER THE SERVICES WE OFFERED</span>
                </div>
                <div className='mt-3'>
                  <h3 className='m-0'>THE ESSENTIALS</h3>
                </div>
              </div>
              <Row>
                <Col className='pt-5'>
                  <div>
                    <Row>
                      <Col sm={6} className='d-flex'>
                        <div className="ess-icon me-3">
                          <FaCar />
                        </div>
                        <div className="ess-cont">
                          <h5>Airport Pick-up Service</h5>
                          <p>Lorem ipsum proin gravida velit auctor sde re sit amet space.</p>
                        </div>
                      </Col>
                      <Col sm={6} className='d-flex'>
                        <div className="ess-icon me-3">
                          <MdMiscellaneousServices />
                        </div>
                        <div className="ess-cont">
                          <h5>Housekeeper Services</h5>
                          <p>Lorem ipsum proin gravida velit auctor sde re sit amet space.</p>
                        </div>
                      </Col>
                      <Col sm={6} className='d-flex'>
                        <div className="ess-icon me-3">
                          <FaWifi />
                        </div>
                        <div className="ess-cont">
                          <h5>Wifi & Internet</h5>
                          <p>Lorem ipsum proin gravida velit auctor sde re sit amet space.</p>
                        </div>
                      </Col>
                      <Col sm={6} className='d-flex'>
                        <div className="ess-icon me-3">
                          <GiWashingMachine />
                        </div>
                        <div className="ess-cont">
                          <h5>Laundry Services</h5>
                          <p>Lorem ipsum proin gravida velit auctor sde re sit amet space.</p>
                        </div>
                      </Col>
                      <Col sm={6} className='d-flex'>
                        <div className="ess-icon me-3">
                          <MdFreeBreakfast />
                        </div>
                        <div className="ess-cont">
                          <h5>Breakfast in Bed</h5>
                          <p>Lorem ipsum proin gravida velit auctor sde re sit amet space.</p>
                        </div>
                      </Col>
                      <Col sm={6} className='d-flex'>
                        <div className="ess-icon me-3">
                          <FaSwimmingPool />
                        </div>
                        <div className="ess-cont">
                          <h5>Swimming Pool</h5>
                          <p>Lorem ipsum proin gravida velit auctor sde re sit amet space.</p>
                        </div>
                      </Col>
                    </Row>
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

export default Service;