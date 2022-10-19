import NavBar from "../../components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

import './index.css';
// import './sandpit.css';

const MainHeader = () => {
    const [showNavBar, setShowNavBar] = useState(false);

    const handleShowNavBar = ()=>{
        setShowNavBar(!showNavBar);
    }

    return (
        // <Container fluid>

        //     {showNavBar && <NavBar setShowNavBar={setShowNavBar} />}

        //     <Row className='homepage-header'>

        //         {/* <Col className='p-0'>
        //             <button className='nav-bar-header-btn' onClick={handleShowNavBar}>
        //                 <FontAwesomeIcon icon={faBars} />
        //             </button>
        //         </Col> */}

        //         <Col className='nav-bar-header-center'>
        //             <button className='nav-bar-header-btn' onClick={handleShowNavBar}>
        //                 <FontAwesomeIcon icon={faBars} />
        //             </button>
        //             <h1 className='nav-bar-header-title'>CUT 'N' SHAVE</h1>
        //         </Col>

        //     </Row>
        // </Container>
        <>
        {showNavBar && <NavBar setShowNavBar={setShowNavBar} />}

        <Row className='homepage-header'>
            {/* <Row > */}
            <Col className='nav-bar-header'>
                <button className='nav-bar-header-btn' onClick={handleShowNavBar}>
                    <FontAwesomeIcon icon={faBars} />
                </button>
                <h1 className='nav-bar-header-title'>CUT 'N' SHAVE</h1>
            </Col>
            
            {/* </Row> */}
        </Row>
    </>
    );
}

export default MainHeader;