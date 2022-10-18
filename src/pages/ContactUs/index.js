import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";

import './index.css';
import { useEffect, useState } from "react";

const ContactUs = () => {
    const [currentDateTime, setCurrentDateTime] = useState('');
    const [storeStatus, setStoreStatus] = useState([]);
    const [shopHours, setShopHours] = useState([
        {
            id: 1,
            day: 'Monday',
            open: '08:00',
            close: '17:00',
        },
        {
            id: 2,
            day: 'Tuesday',
            open: '08:00',
            close: '17:00',
        },
        {
            id: 3,
            day: 'Wednesday',
            open: '08:00',
            close: '17:00',
        },
        {
            id: 4,
            day: 'Thursday',
            open: '08:00',
            close: '17:00',
        },
        {
            id: 5,
            day: 'Friday',
            open: '08:00',
            close: '17:00',
        },
        {
            id: 6,
            day: 'Saturday',
            open: '08:00',
            close: '17:00',
        },
        {
            id: 0,
            day: 'Sunday',
            open: 'closed',
            close: 'closed',
        },
    ]);

    const isStoreOpen = (dateTime, shopHours, closed=0) => {
        // Set to closed manually
        if (closed === 1) {
            return [day, 'CLOSED'];
        }
        // Current Time
        let hours = dateTime.getHours(); 
        let minutes = dateTime.getMinutes();
        // Sunday - Saturday : 0 - 6
        let day = dateTime.getDay();
        
        // Current shopHours
        let selectedDay;
        for(let i in shopHours) {
            if(shopHours[i].id === day) {
                selectedDay = shopHours[i];
            }
        }
        
        let shopOpenTime = selectedDay.open;
        shopOpenTime = shopOpenTime.split(':');
        let shopCloseTime = selectedDay.close;
        shopCloseTime = shopCloseTime.split(':');

        let openingTimeFormat = new Date();
        openingTimeFormat.setHours(shopOpenTime[0], shopOpenTime[1], '00');
        openingTimeFormat = openingTimeFormat.toTimeString();

        let closingTimeFormat = new Date();
        closingTimeFormat.setHours(shopCloseTime[0], shopCloseTime[1], '00');
        closingTimeFormat = closingTimeFormat.toTimeString();

        console.log()

        let returnedArray = [];
        if (dateTime.toTimeString() >= openingTimeFormat) {
            if (dateTime.toTimeString() <= closingTimeFormat) {
                returnedArray.push('OPEN');
            } else {
                returnedArray.push('CLOSED');
            }
        } else {
            returnedArray.push('CLOSED');
        }

        returnedArray.push(selectedDay.open + '-' + selectedDay.close);
        returnedArray.push(selectedDay.day);

        return returnedArray;
    }

    const storeStatusElement = <h3>{storeStatus[2]} {storeStatus[1]} - <span className='font-bold'>{storeStatus[0]}</span></h3>
    
    // storeStatus.map((array)=><h3>{array[0]}</h3>)

    console.log(storeStatus);

    useEffect(()=>{
        const dateTime = new Date();
        let status = isStoreOpen(dateTime, shopHours);
        setStoreStatus(status);
    }, [])
    return (
        <>
            <PageHeader pageTitle='CONTACT US' />

            <Container fluid className='homepage-gallery-container'>
            <Row>
                <Col className='text-center'>
                    <span className='spacer-block'></span>
                    <h2 className='bold-font'>GET IN TOUCH</h2>
                </Col>
            </Row>
                <Row> 
                <Col className='text-center'>
                    {storeStatusElement}
                    <p>32 Lisburn Road, Belfast, BT8 LMK</p>
                    <p><span className='font-bold'>PHONE:</span> +44 720339 4323</p>
                    <p><span className='font-bold'>EMAIL:</span> email@cutnshave.com</p>
                </Col>
                </Row>
            </Container>

            <Container fluid className='contact-us-content-container'> 
            <Row>
                <Col className='contact-us-col grey-background'>
                        <Row className='contact-us-side-contents'>
                            <Form className='contact-us-form '>
                                
                                <Form.Group controlId='formEmail'>
                                    <Form.Label className='font-bold'>E-mail Address</Form.Label>
                                    <Form.Control className='form-input' type='email' placeholder='email@domain.com' />
                                    <Form.Text className='text-muted'>
                                        No personal data is given to third parties.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId='formName'>
                                    <Form.Label className='font-bold'>Name</Form.Label>
                                    <Form.Control className='form-input' type='text' />
                                </Form.Group>

                                <Form.Group controlId='formName'>
                                    <Form.Label className='font-bold'>Phone</Form.Label>
                                    <Form.Control className='form-input' type='text' />
                                </Form.Group>

                                <Form.Group controlId='formPassword'>
                                    <Form.Label className='font-bold'>Message</Form.Label>
                                    <Form.Control className='form-input' as='textarea' />
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