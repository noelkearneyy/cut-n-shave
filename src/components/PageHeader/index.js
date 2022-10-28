import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import './index.css';
import MainHeader from "../Header";
import { useEffect } from "react";

const PageHeader = (props) => {
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
    },[])
    return (
        <Container fluid className='page-header'>
        <MainHeader />

        <Row className='page-header-title-row'>
            <Col className='centered-container transition-in'>
                <h1 className='page-header-title font-bold'>{props.pageTitle}</h1>
            </Col>
        </Row>
    </Container>
    )
}

export default PageHeader; 