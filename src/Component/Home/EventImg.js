import '../../App.css';
import { Col, Container, Row, Offcanvas, Button } from 'react-bootstrap';

function EventImg() {
    return(
    <>
    <section className='eve-img-sec'>
        <Container>
          <Row>
            <Col className='px-md-3 px-lg-4' xs={12} md>
              <div>
                <div className='eve-img text-center'>
                  <div className='eve-before'>
                    <img src={require(`../../image/asset 30.jpeg`)} alt="" width={'100%'} />
                  </div>
                  <div className='eve-cont pt-4'>
                    <h5 className='mb-3'>Spa &amp; Wellness</h5>
                    <p>In the hotel spa center we offer an exceptional well-being experience combining our expertise, high technology and breathtaking results.</p>
                    <span>Discover More</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col className='pt-5 px-md-3 px-lg-4 pb-5 pb-md-0' xs={12} md>
              <div>
                <div className='eve-img text-center'>
                  <div className='eve-before'>
                    <img src={require(`../../image/asset 31.jpeg`)} alt="" width={'100%'} />
                  </div>
                  <div className='eve-cont pt-4'>
                    <h5 className='mb-3'>Summer Week</h5>
                    <p>The Swiss Alps are spectacular in summer, offering some of the best scenery in the world for hiking, biking, rafting and epic drives.</p>
                    <span>Discover More</span>
                  </div>
                </div>
              </div>
            </Col>
            <Col className='px-md-3 px-lg-4' xs={12} md>
              <div>
                <div className='eve-img text-center'>
                  <div className='eve-before'>
                    <img src={require(`../../image/asset 32.jpeg`)} alt="" width={'100%'} />
                  </div>
                  <div className='eve-cont pt-4'>
                    <h5 class="cs-cta-title cs-title">5-Star Gastronomic</h5>
                    <p>Extraordinary moments and special occasions are precious. Enjoy a premium suite and dinner for two as well as spa credits with this special offer.</p>
                    <span>Discover More</span>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
    )
}

export default EventImg;