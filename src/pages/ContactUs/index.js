import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";

import './index.css';

const ContactUs = () => {
    return (
        <>
            <PageHeader pageTitle='CONTACT US' />

            <Container fluid className='contact-us-content-container'> 
            <Row>
                <Col className='contact-us-col'>
                        <Row className='contact-us-side-contents'>
                            <Form className='contact-us-form'>
                                
                                <Form.Group controlId='formEmail'>
                                    <Form.Label className='font-bold'>E-mail Address</Form.Label>
                                    <Form.Control type='email' placeholder='email@domain.com' />
                                    <Form.Text className='text-muted'>
                                        No personal data is given to third parties.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId='formName'>
                                    <Form.Label className='font-bold'>Name</Form.Label>
                                    <Form.Control type='text' />
                                </Form.Group>

                                <Form.Group controlId='formName'>
                                    <Form.Label className='font-bold'>Phone</Form.Label>
                                    <Form.Control type='text' />
                                </Form.Group>

                                <Form.Group controlId='formPassword'>
                                    <Form.Label className='font-bold'>Message</Form.Label>
                                    <Form.Control as='textarea' />
                                </Form.Group>

                                <button className='black-btn contact-us-form-btn' type='submit'>SEND</button>
                            </Form>
                        </Row>
                </Col>

                <Col className='contact-us-col'>
                <iframe className='contact-us-side-contents' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2312.509141065438!2d-5.9550084842421285!3d54.57740228948854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48610896a655362f%3A0x3b6b1e9d67cd5a58!2sLisburn%20Rd%2C%20Belfast!5e0!3m2!1sen!2suk!4v1666029124326!5m2!1sen!2suk" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title='store-location'></iframe>
                </Col>
            </Row>
       </Container>

       <Container fluid className='contact-us-content-container grey-background centered-container'>
       <Row>
            <Col>
                <span className='spacer-block'></span>
            </Col>
        </Row>
        <Row>
            <Col>
                <h2 className='font-bold'>GET IN TOUCH</h2>
            </Col>
        </Row>
        <Row>
            <Col></Col>
            <Col></Col>
        </Row>
       </Container>

            <Container fluid >
        <Row className='black-divider-container fit-container'>
            <Col>
                <button className='fit-black-btn'>BOOK AN APPOINTMENT</button>
            </Col>
        </Row>
       </Container>

      

       <Footer />
        </>
    )
}

export default ContactUs;