import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './index.css';

const NavBar = (props) => {
    const pages = ['Home', 'Who We Are', 'Gallery', 'Shop', 'Contact Us', 'Trade Account'];
    const socials = [
        {
            name: 'Facebook',
            link: 'www.facebook.com',
            icon: <FontAwesomeIcon icon={faFacebook}/>,
        },
        {
            name: 'Instagram',
            link: 'www.instagram.com',
            icon: <FontAwesomeIcon icon={faInstagram}/>,
        }, 
        {
            name: 'Twitter',
            link: 'www.twitter.com',
            icon: <FontAwesomeIcon icon={faTwitter}/>,
        }
    ]

    const handleClose = ()=>{
        props.setShowNavBar(false);
    }

    return (
        <Container fluid className='nav-bar-container'>
        
        <Row>
            <Col className='d-flex flex-row-reverse'>
                <button className='nav-bar-close-btn' onClick={handleClose}>
                    <FontAwesomeIcon icon={faXmark} />
                </button>
            </Col>
        </Row>
        
        <Stack gap={3}>
            <div className='row nav-bar-btn-container'>
        {pages.map((page)=>{

            return <button className='nav-bar-btn'>{page}</button>

        })} 
            </div>
        </Stack>

        <Row className='social-icon-btn-row justify-content-center'>
            {
                socials.map((social)=>{
                    return (
                    <Col className='social-icon-btn-col'><button className='social-icon-btn' aria-label={social.name}>{social.icon}</button></Col>
                    )
                })
            }
        </Row>
        </Container>
    );
}

export default NavBar;