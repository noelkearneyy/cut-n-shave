import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Footer from "../../components/Footer";

import PageHeader from "../../components/PageHeader";

import StaffImgOne from './imgs/about-us-staff-one.jpg';
import StaffImgTwo from './imgs/about-us-staff-two.jpg';
import StaffImgThree from './imgs/about-us-staff-three.jpg';
import StaffImgFour from './imgs/about-us-staff-four.jpg';

import './index.css';
import { Link } from "react-router-dom";

const AboutUs = () => {
    const staffMembers = [
    {
        id: 0,
        img: StaffImgOne,
        name: 'Farrah',
        jobTitle: 'Owner/Barber',
        description: 'Cras sed turpis in tortor hendrerit blandit ullamcorper sed ipsum. Donec vitae leo pulvinar, malesuada mi ac, sollicitudin lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In luctus consectetur massa, in suscipit velit lacinia nec.',
    },
    {
        id: 1,
        img: StaffImgTwo,
        name: 'Eben',
        jobTitle: 'Barber',
        description: 'Cras sed turpis in tortor hendrerit blandit ullamcorper sed ipsum. Donec vitae leo pulvinar, malesuada mi ac, sollicitudin lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In luctus consectetur massa, in suscipit velit lacinia nec.',
    },
    {
        id: 2,
        img: StaffImgThree,
        name: 'Raymond',
        jobTitle: 'Barber',
        description: 'Cras sed turpis in tortor hendrerit blandit ullamcorper sed ipsum. Donec vitae leo pulvinar, malesuada mi ac, sollicitudin lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In luctus consectetur massa, in suscipit velit lacinia nec.',
    },
    {
        id: 3,
        img: StaffImgFour,
        name: 'Aoife',
        jobTitle: 'Barber',
        description: 'Cras sed turpis in tortor hendrerit blandit ullamcorper sed ipsum. Donec vitae leo pulvinar, malesuada mi ac, sollicitudin lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; In luctus consectetur massa, in suscipit velit lacinia nec.',
    },
];

    const staffIcons = staffMembers.map((staff)=>{
        return (
            <Col className='staff-icon justify-content-center' key={staff.id}>
                <img className='staff-icon-img text-center' src={staff.img}/>
                <h2 className='text-center font-bold'>{staff.name.toUpperCase()}</h2>
                <h3 className='text-center font-bold'>{staff.jobTitle.toUpperCase()}</h3>
                <p className='text-center'>{staff.description}</p>
            </Col>
        )
    })
    return (
<>
       <PageHeader pageTitle='WHO WE ARE'/>

       <Container className='homepage-gallery-container'>
       
       <Row>
            <Col>
                <span className='spacer-block'></span>
            </Col>
        </Row>

        <Row>
            <Col className='text-center'>
                <h2 className='bold-font'>THE TEAM</h2>
                <p>Ut quis tincidunt justo. Phasellus posuere pellentesque magna, nec dictum nisl porttitor ac. Pellentesque sit amet erat in arcu sodales dignissim vitae sit amet ligula. Donec eget rutrum nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam non sodales dolor, at porttitor nunc. Aenean consectetur risus a massa egestas, nec porta magna pulvinar.</p>
                <p>Mauris leo erat, tempor quis ante sit amet, pellentesque molestie dolor. Donec iaculis vestibulum auctor. Curabitur ut congue neque. Maecenas cursus, magna vitae egestas posuere, nisi magna dignissim ligula, sit amet varius ante urna non erat. Phasellus rhoncus enim mauris, et venenatis lectus vestibulum sit amet. Nunc iaculis lorem vel tellus congue vulputate. Curabitur enim dui, tempor ac maximus ut, ullamcorper eu risus. Morbi a dictum dui. Duis convallis elit a velit aliquet, vel ultrices leo bibendum. Etiam dignissim, odio quis rhoncus sodales, enim sem accumsan mi, quis auctor mauris ipsum non tellus. Nunc a varius diam, in ullamcorper nisl. Duis sagittis nisl vel leo finibus vestibulum. Ut ligula tortor, posuere eu porttitor porttitor, vehicula eget ipsum. Sed vel tortor ac ipsum sodales congue. </p>
            </Col>
        </Row>

       </Container>

       <Container fluid className='homepage-gallery-container grey-background'>
            <Row>
                {staffIcons}
            </Row>
       </Container>

       <Container fluid >
        <Row className='black-divider-container'>
            <Col>
            <Link className='fit-black-btn link-btn' to='/gallery'>GALLERY</Link>
            </Col>
        </Row>
       </Container>

        <Footer />
</>
    );
}

export default AboutUs;