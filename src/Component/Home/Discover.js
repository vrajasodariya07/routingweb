import '../../App.css';
import { Col, Container, Row, Offcanvas, Button } from 'react-bootstrap';


function Discover() {
    return(
        <>
        <section className='dis-sec'>
        <Container>
          <Row className='d-flex justify-content-center'>
            <Col xs={12} lg>
              <div className='dis'>
                <div>
                  <span>DISCOVER OUR ACCOMMODATIONS</span>
                </div>
                <div className='mt-3'>
                  <h3 className='m-0'>ROOMS. SUITES. VILLE</h3>
                </div>
              </div>
            </Col>
            <Col className='pt-3 pt-lg-0 d-flex justify-content-lg-end align-items-lg-end'>
              <div>
                <a href="" className='text-end'>Explore All Accommodations</a>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
        </>
    )
}

export default Discover;