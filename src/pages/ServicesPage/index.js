import PageHeader from '../../components/PageHeader';
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import './index.css';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';

const Services = () => {
    return (
        <>
        <PageHeader pageTitle='SERVICES'/>

        <Container fluid >
        <Row className='black-divider-container'>
            <Col>
            <Link className='fit-black-btn link-btn' to='/contact_us'>CONTACT US</Link>
            </Col>
        </Row>
       </Container>

        <Footer />

        </>
    )
}

export default Services;