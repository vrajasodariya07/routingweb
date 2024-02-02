import '../../App.css';
import { Col, Container, Row, Offcanvas, Button } from 'react-bootstrap';


function Paid() {
    return(
    <>
        <section className='paid'>
        <Row>
          <Col xs={12} sm={6} lg>
            <div>
              <div className='paid-img'>
                <img src={require(`../../image/asset 21.jpeg`)} alt="" width={'100%'} />
                <div className="img-cont d-flex flex-column justify-content-between">
                  <div className=''>
                    <div className='m-0 d-inline-block money'>$180 / PERSON</div>
                  </div>
                  <div className='tour-info'>
                    <span>OUTDOORS</span>
                    <h6>Winter Hiking</h6>
                    <span><a href="">DISCOVER TRIP</a></span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} lg>
            <div className='pt-5'>
              <div className='paid-img'>
                <img src={require(`../../image/asset 22.jpeg`)} alt="" width={'100%'} />
                <div className="img-cont d-flex flex-column justify-content-between">
                  <div className=''>
                    <div className='m-0 d-inline-block money'>$180 / PERSON</div>
                  </div>
                  <div className='tour-info'>
                    <span>OUTDOORS</span>
                    <h6>Paraglider Exercises</h6>
                    <span><a href="">DISCOVER TRIP</a></span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} lg>
            <div>
              <div className='paid-img'>
                <img src={require(`../../image/asset 23.jpeg`)} alt="" width={'100%'} />
                <div className="img-cont d-flex flex-column justify-content-between">
                  <div className=''>
                    <div className='m-0 d-inline-block money'>$180 / PERSON</div>
                  </div>
                  <div className='tour-info'>
                    <span>OUTDOORS</span>
                    <h6>Golf Courses</h6>
                    <span><a href="">DISCOVER TRIP</a></span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} lg>
            <div className='pt-5'>
              <div className='paid-img'>
                <img src={require(`../../image/asset 24.jpeg`)} alt="" width={'100%'} />
                <div className="img-cont d-flex flex-column justify-content-between">
                  <div className=''>
                    <div className='m-0 d-inline-block money'>$180 / PERSON</div>
                  </div>
                  <div className='tour-info'>
                    <span>OUTDOORS</span>
                    <h6>Ski & Snowshoeing</h6>
                    <span><a href="">DISCOVER TRIP</a></span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>

    </>
    )
}

export default Paid;