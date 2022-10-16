import NavBar from "../../components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

const MainHeader = () => {
    const [showNavBar, setShowNavBar] = useState(false);

    const handleShowNavBar = ()=>{
        setShowNavBar(!showNavBar);
    }

    return (
        <>
        {showNavBar && <NavBar setShowNavBar={setShowNavBar} />}
        <div className='header-container'>
        <Row className='homepage-header align-items-center'>
        <Col>
        <button className='nav-bar-header-btn' onClick={handleShowNavBar}>
        <FontAwesomeIcon icon={faBars} />
        </button>
        </Col>
        
        <Col>
        <h1 className='nav-bar-header-title'>CUT 'N' SHAVE</h1>
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
    </div>
    </>
    );
}

export default MainHeader;