import NavBar from "../NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from "react";
import Col from "react-bootstrap/esm/Col";
import Row from "react-bootstrap/esm/Row";

import './index.css';

const MainHeader = () => {
    const [showNavBar, setShowNavBar] = useState(false);

    const handleShowNavBar = ()=>{
        setShowNavBar(!showNavBar);
    }

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

    return (
        <>
        {showNavBar && <NavBar setShowNavBar={setShowNavBar} />}

        <Row className='homepage-header'>
            {/* <Row > */}
            <Col className='nav-bar-header transition-in'>
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