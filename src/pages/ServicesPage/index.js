import PageHeader from '../../components/PageHeader';
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import './index.css';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
            const transitionElements = document.querySelectorAll('.transition-in');
            const observer = new IntersectionObserver(enteries=> {
                enteries.forEach(entry=>{
                    entry.target.classList.toggle('show', entry.isIntersecting)
                    // Will stop animation when scrolling up
                    if(entry.isIntersecting) observer.unobserve(entry.target)
                })
            }, {
                threshold: 1,
            });
        
            transitionElements.forEach(element => {
                observer.observe(element);
            });

        const servicesMenu = [
            {
                id: 0,
                title: 'Classic Cut',
                price: '£15',
                description: 'Impedit sit sunt quaerat odit tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga.',
            },
            {
                id: 1,
                title: 'Skin Fade',
                price: '£20',
                description: 'Impedit sit sunt quaerat odit tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga.',
            },
            {
                id: 2,
                title: 'Cut & Beard Trim',
                price: '£30',
                description: 'Impedit sit sunt quaerat odit tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga.',
            },
            {
                id: 3,
                title: 'Skin Fade & Beard Trim',
                price: '£40',
                description: 'Impedit sit sunt quaerat odit tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga.',
            },
            {
                id: 4,
                title: 'Beard Trim',
                price: '£15',
                description: 'Impedit sit sunt quaerat odit tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga.',
            },
            {
                id: 5,
                title: 'Long Cut',
                price: '£50',
                description: 'Impedit sit sunt quaerat odit tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga.',
            },
            {
                id: 6,
                title: 'Shave',
                price: '£10',
                description: 'Impedit sit sunt quaerat odit tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga.',
            },
            {
                id: 7,
                title: 'Buzz',
                price: '£20',
                description: 'Impedit sit sunt quaerat odit tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga.',
            },
            {
                id: 8,
                title: 'Buzz & Beard Trim',
                price: '£25',
                description: 'Impedit sit sunt quaerat odit tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga.',
            },
            {
                id: 9,
                title: 'Cut & Shave',
                price: '£35',
                description: 'Impedit sit sunt quaerat odit tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit, quia. Quo neque error repudiandae fuga.',
            },
        ];

        setServices(servicesMenu);
    },[])

    const servicesElement = services.map((service)=>{
        return (
            <Col sm={12} md={6} className='text-center services-menu-col' key={service.id}>
            <div className='service-icon'>
            <h3 className='font-bold transition-in'>{service.title} {service.price}</h3>
            <p className='transition-in'>{service.description}</p>
            </div>
            </Col>
        );
    })

    return (
        <>
        <PageHeader pageTitle='SERVICES'/>

        <Container fluid className='homepage-gallery-container'>
            <Row>
                <Col className='text-center transition-in'>
                    <span className='spacer-block'></span>
                    <h2 className='font-bold'>THE MENU</h2>
                </Col>
            </Row>
                <Row className='row-gap-row'> 
                    { servicesElement }
                </Row>
            </Container>

            <Container fluid >
        <Row className='grey-background'>
            <Col>
            <p className='services-quote-text transition-in'>To make a fine gentleman, several trades are required, but chiefly a barber. <br /> - Oliver Goldsmith</p>
            </Col>
        </Row>
       </Container>

        <Container fluid >
        <Row className='black-divider-container'>
            <Col>
            <Link className='fit-black-btn link-btn transition-in' to='/contact_us'>CONTACT US</Link>
            </Col>
        </Row>
       </Container>

        <Footer />

        </>
    )
}

export default Services;