import '../../App.css';
import { Col, Container, Row, Offcanvas, Button } from 'react-bootstrap';
import { SlPeople } from "react-icons/sl";
import { CiCalendar } from "react-icons/ci";

function Book() {
    return(
        <section className='book-sec'>
        <div>
          <img src={require(`../../image/asset 33.jpeg`)} alt="" srcset="" />
        </div>
        <div className='book-cont'>
          <Container>
            <Row>
              <Col>
                <div className='text-center'>
                  <span>BOOK YOUR STAY NOW</span>
                  <h6 className='mt-3'>Escape to the beautiful mountains where dreams come true. Immerse yourself in the restorative qualities of nature, far from the disturbances of everyday life. </h6>
                  <div className='book-bot text-start'>
                    <Row>
                      <Col xs={12} xl className='pb-4 pb-xl-0 d-flex'>
                        <div className='book-icon'>
                          <CiCalendar />
                        </div>
                        <div>
                          <div>
                            <label>Check In</label>
                          </div>
                          <div>
                            <label>2023-12-28</label>
                          </div>
                        </div>
                      </Col>
                      <Col className='book ps-xl-5 pb-4 pt-4 pt-xl-0 pb-xl-0 d-flex' xs={12} xl>
                        <div className='book-icon'>
                          <CiCalendar />
                        </div>
                        <div>
                          <div>
                            <label>Check Out</label>
                          </div>
                          <div>
                            <label>2023-12-29</label>
                          </div>
                        </div>
                      </Col>
                      <Col className='ps-xl-5 pb-4 pt-4 pt-xl-0 pb-xl-0 d-flex' xs={12} xl>
                        <div className='book-icon'>
                          <SlPeople />
                        </div>
                        <div>
                          <div>
                            <label>Check In</label>
                          </div>
                          <div>
                            <label>1 Room, 1 Adult, 0 Child</label>
                          </div>
                        </div>
                      </Col>
                      <Col>
                        <div>
                          <a href="">Check Availability</a>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    )
}

export default Book;