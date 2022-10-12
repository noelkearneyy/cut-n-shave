import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faShoppingCart, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import NavBar from "../../components/NavBar";

import homepageIntro from './imgs/homepage-intro.jpg';

import './index.css';

const HomePage = () => {
    const [showNavBar, setShowNavBar] = useState(false);

    const handleShowNavBar = ()=>{
        setShowNavBar(!showNavBar);

    }
    return (
      <>
      
      {/* {showNavBar && <NavBar setShowNavBar={setShowNavBar} />} */}
       <Container fluid className='homepage-intro-container' >
       {showNavBar && <NavBar setShowNavBar={setShowNavBar} />}


        <Row className="homepage-header d-flex align-items-center">
            <Col>
            <button className='nav-bar-header-btn' onClick={handleShowNavBar}>
            <FontAwesomeIcon icon={faBars} />
            </button>
            </Col>
            
            <Col>
            <h1 className='nav-bar-header-title'>CUT 'N' SHAVE BARBERS</h1>
            </Col>

            <Col className='d-flex justify-content-end'>
            <button className='nav-bar-header-btn'>
            <FontAwesomeIcon icon={faUser}/>
            </button>
            <button className='nav-bar-header-btn'>
            <FontAwesomeIcon icon={faShoppingCart}/>
            </button>
            </Col>
        </Row>
        
        {/* <Row className='homepage-intro-content'> */}
            <Row><h1 className='homepage-into-header'>FINEST CITY CENTER BARBERS</h1></Row>
            <Row className='d-flex align-items-center'>
                <Col className='homepage-intro-btn'><button className='white-btn'>BOOK AN APPOINTMENT</button></Col>
                <Col className='homepage-intro-btn'><button className='white-btn'>SHOP NOW</button></Col>
                <Col className='homepage-intro-btn'><button className='white-btn'>CONTACT US</button></Col>
            {/* </Row> */}
        </Row>

        <Row >
            <Col className='d-flex justify-content-center'>
            <button className='homepage-down-btn'><FontAwesomeIcon icon={faAngleDown}/></button>
            </Col>
        </Row>
       </Container>

       <Container>
        hello
       </Container>
       </>
        
    )
}

export default HomePage;