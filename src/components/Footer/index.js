import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import './index.css';

const Footer = () =>{
    return (
        <Container fluid className='footer-container'>
            <Row>
                <Col>
                    LEFT
                </Col>

                <Col className='align-right'>
                    <span><strong>FOLLOW US</strong></span>
                    <strong><p><a>Terms and Conditions</a> | <a>Privacy Policy</a></p></strong>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;