import Footer from "../../components/Footer";
import PageHeader from "../../components/PageHeader";

import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";

const NotFound404 = () => { 
    return (
        <>
            <PageHeader pageTitle='PAGE NOT FOUND: 404' />
            
            <Container fluid >
                <Row className='black-divider-container'>
                    <Col>
                        <Link className='fit-black-btn link-btn' to='/'>HOME</Link>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>   
    );
}

export default NotFound404;