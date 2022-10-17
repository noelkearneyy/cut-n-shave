import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import ImgOne from './imgs/gallery-preview/gallery-preview-one.jpg';
import ImgTwo from './imgs/gallery-preview/gallery-preview-two.jpg';
import ImgThree from './imgs/gallery-preview/gallery-preview-three.jpg';
import ImgFour from './imgs/gallery-preview/gallery-preview-four.jpg';

import './index.css';
import MainHeader from '../../components/Header';
import Footer from '../../components/Footer';
import { useState } from "react";
import { Link } from "react-router-dom";


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

    const galleryPreviewImagesElements = galleryPreviewImagesData.map((img) => 
        <img key={img.id} className='homepage-gallery-img' src={img.image} alt='gallery item'/>
    );

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
                    <Link className='white-btn link-btn' to='https://web.getsquire.com/' target='_blank'>BOOK AN APPOINTMENT</Link>
                    <Link className='white-btn link-btn' to='/contact_us'>CONTACT US</Link>
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
       {/* sm={1} lg={2}  */}
       <Container fluid >

        <Row className='text-center'>
            <Col className='grey-square centered-container' md={6}>
            <h2 className='bold-font'>BOOK AN APPOINTMENT</h2>
            <p>Book an appointment here or navigate to Contact Us.</p>
            <div>
            <Link className='black-btn link-btn'>BOOK AN APPOINTMENT</Link>
            <Link className='black-btn link-btn' to='/contact_us'>CONTACT US</Link>
            </div>
            </Col>

            <Col className='homepage-square-img-one centered-container' md={6}>
            <h2 className='bold-font'>OPENING TIMES</h2>
            <div className='row'>
                <div className='col font-bold'>
                    <p>MONDAY...</p>
                    <p>TUESDAY...</p>
                    <p>WEDNESDAY...</p>
                    <p>THURSDAY...</p>
                    <p>FRIDAY...</p>
                    <p>SATURDAY...</p>
                    <p>SUNDAY...</p>
                </div>
                <div className='col'>
                   <p>08:00-17:00</p>
                   <p>08:00-17:00</p>
                   <p>08:00-17:00</p>
                   <p>08:00-17:00</p>
                   <p>08:00-17:00</p>
                   <p>08:00-17:00</p>
                   <p>CLOSED</p>
                </div>
            </div>
            </Col>

            <Col className='square homepage-square-img-two centered-container' md={6}>
            <h2 className='bold-font'>PRODUCTS</h2>
            <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer in orci a ligula placerat semper. Quisque diam dolor, facilisis ut eleifend sit amet, faucibus id ipsum. Duis nec malesuada ante. Phasellus eleifend libero risus, aliquam volutpat diam ornare a. Maecenas dui est, blandit id nulla at, tempor consequat eros. Aliquam vitae odio sed augue placerat vestibulum. Aenean interdum non nulla quis pellentesque.</p>
            </Col>

            <Col className='homepage-square-img-three centered-container' md={6}>
            <h2 className='bold-font'>SERVICES</h2>
            <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer in orci a ligula placerat semper. Quisque diam dolor, facilisis ut eleifend sit amet, faucibus id ipsum. Duis nec malesuada ante. Phasellus eleifend libero risus, aliquam volutpat diam ornare a. Maecenas dui est, blandit id nulla at, tempor consequat eros. Aliquam vitae odio sed augue placerat vestibulum. Aenean interdum non nulla quis pellentesque.</p>
            <div>
            <Link className='white-btn link-btn' to='/services'>VIEW SERVICES</Link>
            </div>
            </Col>

        </Row>
       </Container>

       <Container fluid className='grey-background homepage-gallery-container' >
       
        <Row>
            <Col>
                <span className='spacer-block'></span>
            </Col>
        </Row>
        
        <Row>
            <Col className='text-center'>
            <h2 className='bold-font'>GALLERY</h2>
            </Col>
        </Row>
        
        <Row>
            <Col className="text-center">
                {galleryPreviewImagesElements}
            </Col>
        </Row>
        
        <Row>
            <Col className='homepage-brief-about-us-col'>
                <Link className='black-btn margin-0 link-btn' to='/gallery'>VIEW MORE</Link>
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