import Col from 'react-bootstrap/esm/Col';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';

import ImgOne from './imgs/gallery-preview/gallery-preview-one.jpg';
import ImgTwo from './imgs/gallery-preview/gallery-preview-two.jpg';
import ImgThree from './imgs/gallery-preview/gallery-preview-three.jpg';
import ImgFour from './imgs/gallery-preview/gallery-preview-four.jpg';

import './index.css';
import MainHeader from '../../components/Header';
import Footer from '../../components/Footer';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';



const HomePage = () => {


    // setGalleryPreviewImagesData can be added if changing state dynamically
    const [galleryPreviewImagesData] = useState([
        {
            id: 0,
            image: ImgOne,
        },
        {
            id: 1,
            image: ImgTwo,
        },
        {
            id: 2,
            image: ImgThree,
        },
        {
            id: 3,
            image: ImgFour,
        },
    ]);

    useEffect(()=>{
        const transitionElements = document.querySelectorAll('.transition-in');
        const observer = new IntersectionObserver(enteries=> {
            enteries.forEach(entry=>{
                entry.target.classList.toggle('show', entry.isIntersecting)
                // Will stop animation when scrolling up
                if(entry.isIntersecting) observer.unobserve(entry.target)
            })
        }, {
            threshold: 0.8,
        });
    
        transitionElements.forEach(element => {
            observer.observe(element);
        })
    })

    const galleryPreviewImagesElements = galleryPreviewImagesData.map((img) =>
        <img key={img.id} className='homepage-gallery-img' src={img.image} alt='gallery item' />
    );

    return (
        <>
           
            <Container fluid className='homepage-intro-container p-0'>
                <MainHeader />
            <Row className='centered-container homepage-intro-content transition-in'>
                {/* <Row className='homepage-intro-title'> */}
                    <Col className='centered-container'>
                        <h1 className='homepage-intro-header'>FINEST CITY CENTER BARBERS</h1>
                    </Col>
                {/* </Row> */}

                <Row className='btn-row'>
                {/* className='homepage-intro-btns-col' */}
                    <Col xs={6} className='homepage-intro-btns-col'>
                        <Link className='white-btn link-btn' to='https://web.getsquire.com/' target='_blank'>BOOK AN APPOINTMENT</Link>
                    </Col>
                    <Col xs={6} className='homepage-intro-btns-col'>
                        <Link className='white-btn link-btn' to='/contact_us'>CONTACT US</Link>
                    </Col>
                </Row>
                </Row>
            </Container>

            <Container className='homepage-brief-about-us-container'>
            
                <Row >
                    <Col className='text-center transition-in'>
                        <span className='spacer-block'></span>
                        <h2 className='bold-font'>A BRIEF ABOUT US</h2>
                    </Col>
                </Row>
                <Row>
                    <Col className='text-center homepage-brief-about-us-col transition-in'>
                        <p>Ut vel risus ut leo sodales interdum. Fusce nunc lacus, cursus ut urna ut, condimentum porttitor massa. Etiam ut molestie ipsum, sit amet efficitur nulla. Integer accumsan, mi id molestie hendrerit, eros est dictum neque, quis rhoncus mi arcu vel erat. Mauris lobortis ex ac sapien fermentum commodo. Morbi et mattis tortor. Maecenas sed vulputate nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
                        <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer in orci a ligula placerat semper. Quisque diam dolor, facilisis ut eleifend sit amet, faucibus id ipsum. Duis nec malesuada ante. Phasellus eleifend libero risus, aliquam volutpat diam ornare a. Maecenas dui est, blandit id nulla at, tempor consequat eros. Aliquam vitae odio sed augue placerat vestibulum. Aenean interdum non nulla quis pellentesque.</p>
                        <p>Sed sed mollis mi. Mauris eget justo turpis. Integer mollis lacinia elementum. Quisque sed urna nulla. In at neque ac metus imperdiet viverra sed at arcu. Suspendisse varius dignissim diam, ut accumsan urna facilisis at. Morbi eu purus dui.</p>
                    </Col>
                </Row>
                
            </Container>
 
            <Container fluid >

                <Row className='text-center'>
                    
                    <Col className='grey-square centered-container row-margin' md={6}>
                        <h2 className='bold-font transition-in'>BOOK AN APPOINTMENT</h2>
                        <p className='transition-in'>Book an appointment here or navigate to Contact Us.</p>
                        <Row className='btn-row transition-in'>
                            <Col xs={6} className='homepage-intro-btns-col'>
                            <Link className='black-btn link-btn'>BOOK AN APPOINTMENT</Link>
                            </Col>
                            <Col xs={6} className='homepage-intro-btns-col'>
                            <Link className='black-btn link-btn' to='/contact_us'>CONTACT US</Link>
                            </Col>
                        </Row>
                    </Col>

                    <Col className='homepage-square-img-one centered-container' md={6}>
                        <div className='transition-in'>
                        <h2 className='bold-font'>OPENING TIMES</h2>
                        <Row>
                            <Col xs={6} className='font-bold'>
                                <p>MONDAY...</p>
                                <p>TUESDAY...</p>
                                <p>WEDNESDAY...</p>
                                <p>THURSDAY...</p>
                                <p>FRIDAY...</p>
                                <p>SATURDAY...</p>
                                <p>SUNDAY...</p>
                            </Col>
                            <Col xs={6}>
                                <p>08:00-17:00</p>
                                <p>08:00-17:00</p>
                                <p>08:00-17:00</p>
                                <p>08:00-17:00</p>
                                <p>08:00-17:00</p>
                                <p>08:00-17:00</p>
                                <p>CLOSED</p>
                            </Col>
                        </Row>
                        </div>
                    </Col>

                    <Col className='square homepage-square-img-two centered-container' md={6}>
                        <h2 className='bold-font transition-in'>PRODUCTS</h2>
                        <p className='transition-in'>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer in orci a ligula placerat semper. Quisque diam dolor, facilisis ut eleifend sit amet, faucibus id ipsum. Duis nec malesuada ante. Phasellus eleifend libero risus, aliquam volutpat diam ornare a. Maecenas dui est, blandit id nulla at, tempor consequat eros. Aliquam vitae odio sed augue placerat vestibulum. Aenean interdum non nulla quis pellentesque.</p>
                    </Col>

                    <Col className='homepage-square-img-three centered-container' md={6}>
                        <h2 className='bold-font transition-in'>SERVICES</h2>
                        <p className='transition-in'>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer in orci a ligula placerat semper. Quisque diam dolor, facilisis ut eleifend sit amet, faucibus id ipsum. Duis nec malesuada ante. Phasellus eleifend libero risus, aliquam volutpat diam ornare a. Maecenas dui est, blandit id nulla at, tempor consequat eros. Aliquam vitae odio sed augue placerat vestibulum. Aenean interdum non nulla quis pellentesque.</p>
                        <div className='transition-in'>
                            <Link className='white-btn link-btn' to='/services'>VIEW SERVICES</Link>
                        </div>
                    </Col>

                </Row>
            </Container>

            <Container fluid className='grey-background homepage-gallery-container' >

                <Row>
                    <Col className='text-center transition-in'>
                        <span className='spacer-block'></span>
                        <h2 className='bold-font'>GALLERY</h2>
                    </Col>
                </Row>

                <Row>
                    <Col className='text-center transition-in'>
                        {galleryPreviewImagesElements}
                    </Col>
                </Row>

                <Row>
                    <Col className='homepage-brief-about-us-col transition-in'>
                        <Link className='black-btn margin-0 link-btn' to='/gallery'>VIEW MORE</Link>
                    </Col>
                </Row>

            </Container>

            <Container fluid >
                <Row className='black-divider-container'>
                    <Col>
                        <button className='fit-black-btn transition-in'>BOOK AN APPOINTMENT</button>
                    </Col>
                </Row>
            </Container>

            <Footer />
           
        </>

    )
}

export default HomePage;