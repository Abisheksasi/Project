import { MdOutlineLocationOn } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { BsTelephone } from "react-icons/bs";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import amber from '../image/amberblack.svg';
import Rat from '../image/rating.svg';
import Play from "../image/play.svg";
import Appel from "../image/appels.svg";
import Visa from "../image/partners1.svg";
import Link from "../image/Linkedin.svg";
import insta from "../image/Instagram.svg";
import Twit from "../image/Twitter.svg";
import pin from "../image/pinterest.svg";
import You from "../image/youtube.svg";
import fac from "../image/facebook.svg";

function Footer() {
    return (
        <Container className="Footer mb-5" fluid>
            <Row className="Footer">
                <Col lg={4} className='footer'>
                    <img src={amber} alt="amber" className='amber ms-3' />
                    <p className='ms-3 mt-1'>amber © 2024 All rights reserved</p>
                    <div className='foot-rat ms-3 rounded'>
                        <div className='d-flex flex-row'>
                            <img src={Rat} alt="" className='foot-icon mt-3 ms-4' />
                            <h6 className='ms-3 mt-4'>4.8/5 on Trustpilot</h6>
                        </div>
                        <div className=' ms-4 mt-3 pb-2'>
                            <span className='d-flex flex-row'>Rated as"Excellent"<h6 className='rating'>• 4800+</h6> Reviews by students</span>
                        </div>
                    </div>
                    <div className='foot-rat ms-3 rounded mt-2 payment'>
                        <div className='d-flex flex-row'>
                            <h6 className=' ps-3 Apps'>Get the app</h6>
                            <h6 className='ps-3 option'>Payment Options</h6>
                        </div>
                        <div className='d-flex flex-row pb-2'>
                            <div className='d-flex flex-row'>
                                <img src={Play} alt="Play Store" className='ms-3 mt-2 w-25' />
                                <img src={Appel} alt="Appel Store" className='ms-3 mt-2 w-25' />
                            </div>
                            <div className='d-flex flex-row ms-2'>
                                <img src={Visa} alt="Play Store" className=' mt-2 w-100' />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col lg={2} className='company mt-3 d-lg-none'>
                    <Accordion>
                        <Accordion.Item eventKey="0" className="border-top-0 border-end-0 border-start-0">
                            <Accordion.Header>Company</Accordion.Header>
                            <Accordion.Body>
                                <h6 className='pt-2'>About</h6>
                                <h6 className='pt-2'>How it works</h6>
                                <h6 className='pt-2'>Refer a Friend</h6>
                                <h6 className='pt-2'>Group Bookings</h6>
                                <h6 className='pt-2'>List with us</h6>
                                <h6 className='pt-2'>Partner with us</h6>
                                <h6 className='pt-2'>Careers</h6>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col lg={2} className='company mt-3 d-none d-lg-block'>
                    <h4>Company</h4>
                    <h6 className='pt-2'>About</h6>
                    <h6 className='pt-2'>How it works</h6>
                    <h6 className='pt-2'>Refer a Friend</h6>
                    <h6 className='pt-2'>Group Bookings</h6>
                    <h6 className='pt-2'>List with us</h6>
                    <h6 className='pt-2'>Partner with us</h6>
                    <h6 className='pt-2'>Careers</h6>
                </Col>
                <Col lg={2} className='discover mt-3 company d-lg-none'>
                    <Accordion>
                        <Accordion.Item eventKey="1" className="border-top-0 border-end-0 border-start-0">
                            <Accordion.Header className="footer-head">Discover</Accordion.Header>
                            <Accordion.Body>
                                <h6 className='pt-2'>Blog</h6>
                                <h6 className='pt-2'>Podcast</h6>
                                <h6 className='pt-2'>Newsroom</h6>
                                <h6 className='pt-2'>Amber Plus</h6>
                                <h6 className='pt-2'>Media Mention</h6>
                                <h6 className='pt-2'>Ambassador</h6>
                                <h6 className='pt-2'>Scholarships</h6>
                                <h6 className='pt-2'>Exams</h6>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>

                <Col lg={2} className='discover mt-3 company d-none d-lg-block'>
                    <h4>Discover</h4>
                    <h6 className='pt-2'>Blog</h6>
                    <h6 className='pt-2'>Podcast</h6>
                    <h6 className='pt-2'>Newsroom</h6>
                    <h6 className='pt-2'>Amber Plus</h6>
                    <h6 className='pt-2'>Media Mention</h6>
                    <h6 className='pt-2'>Ambassador</h6>
                    <h6 className='pt-2'>Scholarships</h6>
                    <h6 className='pt-2'>Exams</h6>
                </Col>

                <Col lg={2} className='company mt-3 d-lg-none'>
                    <Accordion>
                        <Accordion.Item eventKey="2" className="border-top-0 border-end-0 border-start-0">
                            <Accordion.Header>Support</Accordion.Header>
                            <Accordion.Body>
                                <h6 className='pt-2'>Help Center</h6>
                                <h6 className='pt-2'>Contact</h6>
                                <h6 className='pt-2'>T&C</h6>
                                <h6 className='pt-2'>Privacy Policy</h6>
                                <h6 className='pt-2'>Sitemap</h6>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>

                <Col lg={2} className='company mt-3 d-none d-lg-block'>
                    <h4>Support</h4>
                    <h6 className='pt-2'>Help Center</h6>
                    <h6 className='pt-2'>Contact</h6>
                    <h6 className='pt-2'>T&C</h6>
                    <h6 className='pt-2'>Privacy Policy</h6>
                    <h6 className='pt-2'>Sitemap</h6>
                </Col>

                <Col lg={2} className='mt-3 contact d-lg-none'>
                    <Accordion>
                        <Accordion.Item eventKey="2" className="border-top-0 border-end-0 border-start-0">
                            <Accordion.Header>Contact</Accordion.Header>
                            <Accordion.Body>
                                <div className="contact-contain mt-3 rounded">
                                    <BsTelephone className="phone-icon mt-2 mb-2 ms-2" />
                                    <span className="ms-1">+91 9988776655</span>
                                </div>
                                <div className="contact-contain mt-3 rounded">
                                    <CiMail className="mail-icon mt-2 mb-2 ms-2" />
                                    <span className="ms-1">contact@gmail.com</span>
                                </div>
                                <div className="contact-contain mt-3 rounded">
                                    <BsWhatsapp className="whatsapp-icon mt-2 mb-2 ms-2" />
                                    <span className="ms-1">WhatsApp</span>
                                </div>
                                <div className="contact-contain mt-3 rounded">
                                    <MdOutlineLocationOn className="location-icon mt-2 ms-2 mb-2" />
                                    <span className="ms-1">244,Tamil Nadu</span>
                                </div>
                                <h5 className="mt-3">Follow us on:</h5>
                                <div className="d-flex flex-row">
                                    <img src={Link} alt="Link" />
                                    <img src={fac} alt="facebook" className="facbook ms-2" />
                                    <img src={insta} alt="Insta" className="ms-2" />
                                    <img src={You} alt="Youtube" className="youtbe ms-2" />
                                    <img src={Twit} alt="Twitter" className=" ms-2" />
                                    <img src={pin} alt="Pinterset" className="ms-2" />
                                </div>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
                <Col lg={2} className='mt-3 contact d-none d-lg-block'>
                <h4>Contact</h4>
                    <div className="contact-contain mt-3 rounded">
                        <BsTelephone className="phone-icon mt-2 mb-2 ms-2" />
                        <span className="ms-1">+91 9988776655</span>
                    </div>
                    <div className="contact-contain mt-3 rounded">
                        <CiMail className="mail-icon mt-2 mb-2 ms-2" />
                        <span className="ms-1">contact@gmail.com</span>
                    </div>
                    <div className="contact-contain mt-3 rounded">
                        <BsWhatsapp className="whatsapp-icon mt-2 mb-2 ms-2" />
                        <span className="ms-1">WhatsApp</span>
                    </div>
                    <div className="contact-contain mt-3 rounded">
                        <MdOutlineLocationOn className="location-icon mt-2 ms-2 mb-2" />
                        <span className="ms-1">244,Tamil Nadu</span>
                    </div>
                    <h5 className="mt-3">Follow us on:</h5>
                    <div className="d-flex flex-row">
                        <img src={Link} alt="Link" />
                        <img src={fac} alt="facebook" className="facbook ms-2" />
                        <img src={insta} alt="Insta" className="ms-2" />
                        <img src={You} alt="Youtube" className="youtbe ms-2" />
                        <img src={Twit} alt="Twitter" className=" ms-2" />
                        <img src={pin} alt="Pinterset" className="ms-2" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Footer;