import React from 'react';
import './main.css';
import { IoIosCloseCircleOutline } from "react-icons/io";
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { TfiHelpAlt } from 'react-icons/tfi';
import { CiCircleInfo } from 'react-icons/ci';
import { FiMessageSquare } from 'react-icons/fi';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaFacebookMessenger } from 'react-icons/fa';
import { LuPhone } from 'react-icons/lu';
import { CiMail } from 'react-icons/ci';
import { IoMdHeartEmpty } from 'react-icons/io';
import { AiOutlineUsergroupAdd } from "react-icons/ai"; 
import { PiCalendarStarThin } from "react-icons/pi";
import { PiMedalThin } from "react-icons/pi";
import { PiHandshakeThin } from "react-icons/pi";
import { PiListChecksThin } from "react-icons/pi";
import { MdOutlineLogin } from "react-icons/md";
import { CiUser } from "react-icons/ci"; 
const Mobile = ({ onClose }) => {
    return (
        <div className="custom-popup">
            <button className="mobile-button" onClick={onClose}>
                <IoIosCloseCircleOutline
                    style={{
                        color: "black",
                        fontSize: '25px',
                        fontWeight: '100'
                    }} />
            </button>
            <div className="mobile-content">
                <h2>Menu</h2>
                <hr className='w-100 m-0 b-0 pt-2' />
                <Dropdown className="custom-dropdown">
                    <Dropdown.Toggle id="dropdown-basic" className="d-flex align-items-center drop w-100">
                        <FontAwesomeIcon icon={faHeadset} className=" headset" style={{ color: 'black', fontSize: '16px',marginLeft:'-5px' }} />
                        <span className="ms-3  text-dark fw-normal">Support</span>
                    </Dropdown.Toggle>
                    <Dropdown.Menu className="custom-dropdown-menu dropdown-menu-end mt-2 w-100 border-0">
                        <Container fluid className='mobile-support'>
                            <p className="mt-2" style={{ width: '144px' }}>Quick Links</p>
                            <Row>
                                <Col>
                                    <Dropdown.Item href="#/action-7" className="quick-link d-flex align-items-center mobile-work" style={{ width: '144px', marginLeft: '-10px' }}>
                                        <TfiHelpAlt className="me-2" style={{ fontSize: '15px' }} />
                                        <span className=' ms-1'>Help Center</span>
                                    </Dropdown.Item>
                                </Col>
                                <Col>
                                    <Dropdown.Item href="#/action-7" className="quick-link d-flex align-items-center mobile-work" style={{ width: '144px', marginLeft: '-10px' }}>
                                        <CiCircleInfo className="" style={{ fontSize: '18px' }} />
                                        <span className=' ms-1'>How It Works</span>
                                    </Dropdown.Item>
                                </Col>
                            </Row>
                            <hr className='w-100 m-0 b-0 mt-2' />
                            <p className="mt-2" style={{ width: '220px' }}>Support Now</p>
                            <Dropdown.Item href="#/action-1" className="d-flex align-items-center" style={{ width: '100%' }}>
                                <FiMessageSquare className="me-2 mt-2 text-danger" style={{ fontSize: '23px' }} />
                                <span>Quick Chat</span>
                                <span className="badge bg-success ms-auto pt-1 ps-2 pe-2 pb-1">Online</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-3" className="d-flex align-items-center" style={{ width: '220px' }}>
                                <IoLogoWhatsapp className="me-2 mt-2 text-success" style={{ fontSize: '23px' }} />
                                <span className="mt-2">Whatsapp</span>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2" className="d-flex align-items-center" style={{ width: '220px' }}>
                                <FaFacebookMessenger className="me-2 mt-2 text-primary" style={{ fontSize: '23px' }} />
                                <span className="mt-2">Facebook Messenger</span>
                            </Dropdown.Item>
                            <hr />
                            <Dropdown.Item href="#/action-4" className="d-flex align-items-center" style={{ width: '220px' }}>
                                <LuPhone className="me-2 text-secondary" style={{ fontSize: '23px' }} />
                                <span className="">+91 9933753443</span>
                            </Dropdown.Item>
                            <hr />
                            <Dropdown.Item href="#/action-5" className="d-flex align-items-center" style={{ width: '220px' }}>
                                <CiMail className="me-2  text-secondary" style={{ fontSize: '23px' }} />
                                <span mail classname="">contact@student.com</span>
                            </Dropdown.Item>
                        </Container>
                    </Dropdown.Menu>
                </Dropdown>
                <div className='short w-100 mt-2'>
                    <IoMdHeartEmpty className='ms-1 me-1 mt-2 mb-2' style={{ color: "black", fontSize: '20px', fontWeight: '400' }} />
                    <span className='ms-2 me-1 mt-1 text-dark fw-normal'>Shortlist</span>
                </div>
                <hr className='w-100 m-0 b-0 mt-2' />
                <p className='mt-2 ps-2 w-100 '>Login to Continue</p>
                <Dropdown.Item href="#/action-3" className='d-flex align-items-center mt-2' style={{ width: '100%' }}>
                <CiUser  style={{fontSize: '22px', fontWeight: '400' }} className='me-2' />
                    <span className='mt-2 ms-2'>Group Booking</span>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3" className='d-flex align-items-center mt-2' style={{ width: '100%' }}>
                    <PiCalendarStarThin style={{ fontSize: '20px', fontWeight: '400' }} className='me-2 mt-2' />
                    <span className='mt-2 ms-2'>Booking</span>
                </Dropdown.Item>
                <hr className='w-100'></hr>
                <Dropdown.Item href="#/action-2" className='d-flex align-items-center mt-2' style={{ width: '100%' }}>
                <AiOutlineUsergroupAdd style={{ fontSize: '20px', fontWeight: '400' }} className='me-2 mt-2'/>
                    <span className='mt-2 ms-2'>Group Booking</span>
                    <span className="badge bg-danger ms-auto pt-1 ps-2 pe-2 pb-1">New</span>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-4" className='contact d-flex align-items-center mt-2' style={{ width: '100%' }}>
                    <PiMedalThin style={{ fontSize: '20px', fontWeight: '400' }} className='me-2 mt-2' />
                    <span className='mt-2 ms-2'>Refer a firend</span>
                    <span className="badge bg-success ms-auto pt-1 ps-2 pe-2 pb-1">Get 50 GBP</span>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-5" className='contact d-flex align-items-center mt-2' style={{ width: '100%' }}>
                    <PiHandshakeThin style={{ fontSize: '20px', fontWeight: '400' }} className='me-2 mt-2' />
                    <span className='mt-2 ms-2'>Partner With Us</span>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-6" className='contact d-flex align-items-center mt-2' style={{ width: '100%' }}>
                    <PiListChecksThin style={{ fontSize: '20px', fontWeight: '400' }} className='me-2 mt-2' />
                    <span className='mt-2 ms-2'>List With us</span>
                </Dropdown.Item>
                <div className='d-flex justify-content-center'>
                    <div className='login-button w-75 border border-dark text-center rounded'>
                        <MdOutlineLogin className="me-2 mt-2 mb-2 text-secondary" style={{ fontSize: '23px' }} />
                        <span className='ms-1 mt-2 mb-1 me-2 text-dark'>Login</span>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Mobile;