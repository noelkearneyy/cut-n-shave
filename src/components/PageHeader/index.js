import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";

import './index.css';
import MainHeader from "../../components/Header";

const PageHeader = (props) => {
    return (
        <Container fluid className='page-header'>
        <MainHeader />

        <Row className='page-header-title-row'>
            <Col className="centered-container">
                <h1 className='page-header-title font-bold'>{props.pageTitle}</h1>
            </Col>
        </Row>
    </Container>
    )
}

export default PageHeader; 