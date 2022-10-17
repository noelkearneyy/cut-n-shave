import { Container } from 'react-bootstrap';
import Footer from '../../components/Footer';
import PageHeader from '../../components/PageHeader';

import Col from 'react-bootstrap/esm/Col';
import Row from 'react-bootstrap/esm/Row';
import Carousel from 'react-bootstrap/Carousel';

import './index.css';
import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
    <>
        <PageHeader pageTitle='GALLERY' />

        <Container className='homepage-gallery-container'>
            <Row>
                <Col>
                    <span className='spacer-block'></span>
                </Col>
            </Row>
            <Row>
                <Col className='text-center'>
                <Carousel fade>
    <Carousel.Item>
        <img
          className="d-block w-100"
          src="holder.js/800x400?text=First slide&bg=373940"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                </Col>
            </Row>
            <Row>
                
            </Row>
        </Container>

        <Container fluid >
        <Row className='black-divider-container'>
            <Col>
            <Link className='fit-black-btn link-btn' to='/services'>SERVICES</Link>
            </Col>
        </Row>
       </Container>

        <Footer />
    </>
    );
}

export default Gallery;