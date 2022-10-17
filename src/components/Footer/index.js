import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './index.css';
import { Link } from "react-router-dom";

const Footer = () =>{
    const socials = [
        {
            name: 'Facebook',
            link: 'www.facebook.com',
            icon: <FontAwesomeIcon icon={faFacebook}/>,
        },
        {
            name: 'Instagram',
            link: 'www.instagram.com',
            icon: <FontAwesomeIcon icon={faInstagram}/>,
        }, 
        {
            name: 'Twitter',
            link: 'www.twitter.com',
            icon: <FontAwesomeIcon icon={faTwitter}/>,
        }
    ]
    return (
        <Container fluid className='footer-container'>
            <Row className='footer-row'>
                <Col sm={12} md={6} className='footer-left-side'>
                    <h2 className='footer-shop-name font-bold'>CUT 'N' SHAVE</h2>
                    <p>32 Lisburn Road, Belfast, BT8 LMK</p>
                    <p className='font-bold'>PHONE: +44 720339 4323</p>
                    <p className='font-bold'>EMAIL: email@cutnshave.com</p>
                </Col>

                <Col sm={12} md={6} className='footer-right-side'>
                {/* <Row>
                    <Col> */}
                    <Row className='row footer-opening-times-container'>
                        <Col className='footer-opening-times-days-col' sm={2}>
                            <p>MONDAY...</p>
                            <p>TUESDAY...</p>
                            <p>WEDNESDAY...</p>
                            <p>THURSDAY...</p>
                            <p>FRIDAY...</p>
                            <p>SATURDAY...</p>
                            <p>SUNDAY...</p>
                        </Col>
                        <Col sm={2} className='text-align-right col-width-min'>
                            <p>08:00-17:00</p>
                            <p>08:00-17:00</p>
                            <p>08:00-17:00</p>
                            <p>08:00-17:00</p>
                            <p>08:00-17:00</p>
                            <p>08:00-17:00</p>
                            <p>CLOSED</p>
                        </Col>
                    </Row>
                    <div className='footer-socials-container'>
                        <p className='margin-0 font-bold'>FOLLOW US</p>
                        {
                socials.map((social)=>{
                    return (
                    <button className='social-icon-btn' aria-label={social.name}>{social.icon}</button>
                    )
                })
            } 
            </div>      
            {/* </Col>
                    </Row> */}
                    {/* <Row> */}
                    <div className='footer-info-container font-bold'>
                        <Link>Terms and Conditions</Link> 
                        <p className='margin-0 '>|</p> 
                        <Link>Privacy Policy</Link>
                    </div>
                    {/* </Row>  */}
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;