// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBars, faUser, faShoppingCart, faAngleDown } from '@fortawesome/free-solid-svg-icons';
// import { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import BarberShopImg from './imgs/homepage-square-img-one.jpg';

import './index.css';
import MainHeader from "../../components/Header";
import Footer from "../../components/Footer";

const HomePage = () => {
    return (
      <>
      
       <Container fluid className='p-0'>
        <div className='homepage-intro-container centered-container'>
        
        <MainHeader />
            
            <Row className='homepage-intro-title'>
                <Col>
                <h1 className='homepage-intro-header'>FINEST CITY CENTER BARBERS</h1>
                </Col>
            </Row>
            <Row className='justify-content-sm-center homepage-intro-btns-row'>
            {/* className='homepage-intro-btns-col' */}
                <Col sm='auto'>
                    <button className='white-btn'>BOOK AN APPOINTMENT</button>
                    <button className='white-btn'>CONTACT US</button>
                </Col>
            </Row>

        {/* <Row className='homepage-intro-down-btn justify-content-sm-center '>
            <Col sm='auto'>
            <button className='homepage-down-btn'><FontAwesomeIcon icon={faAngleDown}/></button>
            </Col>
        </Row> */}
        </div>
      
        
       </Container>

       <Container className='homepage-brief-about-us-container'>
       <Row>
            <Col><span className='spacer-block'></span></Col>
        </Row>
        <Row>
            <Col className='text-center homepage-brief-about-us-col'>
            <h2 className='bold-font'>A BRIEF ABOUT US</h2>
            <p>Ut vel risus ut leo sodales interdum. Fusce nunc lacus, cursus ut urna ut, condimentum porttitor massa. Etiam ut molestie ipsum, sit amet efficitur nulla. Integer accumsan, mi id molestie hendrerit, eros est dictum neque, quis rhoncus mi arcu vel erat. Mauris lobortis ex ac sapien fermentum commodo. Morbi et mattis tortor. Maecenas sed vulputate nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus.</p>
            <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer in orci a ligula placerat semper. Quisque diam dolor, facilisis ut eleifend sit amet, faucibus id ipsum. Duis nec malesuada ante. Phasellus eleifend libero risus, aliquam volutpat diam ornare a. Maecenas dui est, blandit id nulla at, tempor consequat eros. Aliquam vitae odio sed augue placerat vestibulum. Aenean interdum non nulla quis pellentesque.</p>
            <p>Sed sed mollis mi. Mauris eget justo turpis. Integer mollis lacinia elementum. Quisque sed urna nulla. In at neque ac metus imperdiet viverra sed at arcu. Suspendisse varius dignissim diam, ut accumsan urna facilisis at. Morbi eu purus dui.</p>
            </Col>
        </Row>
       </Container>

       <Container fluid className=''>

        <Row sm={1} md={2} className='text-center'>
            <Col className='grey-square centered-container'>
            <h2 className='bold-font'>BOOK AN APPOINTMENT</h2>
            <p>Book an appointment here or navigate to Contact Us.</p>
            <div>
            <button className='black-btn'>BOOK AN APPOINTMENT</button>
            <button className='black-btn'>CONTACT US</button>
            </div>
            </Col>

            <Col className='homepage-square-img-one'><img className='fit-image' src={BarberShopImg} alt='barber-shop'/></Col>

            <Col className='square homepage-square-img-two centered-container'>
            <h2 className='bold-font'>PRODUCTS</h2>
            <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer in orci a ligula placerat semper. Quisque diam dolor, facilisis ut eleifend sit amet, faucibus id ipsum. Duis nec malesuada ante. Phasellus eleifend libero risus, aliquam volutpat diam ornare a. Maecenas dui est, blandit id nulla at, tempor consequat eros. Aliquam vitae odio sed augue placerat vestibulum. Aenean interdum non nulla quis pellentesque.</p>
            </Col>

            <Col className='homepage-square-img-three centered-container'>
            <h2 className='bold-font'>SERVICES</h2>
            <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer in orci a ligula placerat semper. Quisque diam dolor, facilisis ut eleifend sit amet, faucibus id ipsum. Duis nec malesuada ante. Phasellus eleifend libero risus, aliquam volutpat diam ornare a. Maecenas dui est, blandit id nulla at, tempor consequat eros. Aliquam vitae odio sed augue placerat vestibulum. Aenean interdum non nulla quis pellentesque.</p>
            <div>
            <button className='white-btn'>VIEW SERVICES</button>
            </div>
            </Col>
        </Row>
       </Container>

       <Container fluid className='grey-background homepage-brief-about-us-container' >
       <Row>
            <Col><span className='spacer-block'></span></Col>
        </Row>
        <Row>
            <Col className='text-center homepage-brief-about-us-col'>
            <h2 className='bold-font'>GALLERY</h2>
            
            </Col>
        </Row>
       </Container>

       <Container fluid >
        <Row className='black-divider-container'>
            <Col>
            <button className='fit-black-btn'>BOOK AN APPOINTMENT</button>
            </Col>
        </Row>
       </Container>

        <Footer />
       
        </> 
        
    )
}

export default HomePage;