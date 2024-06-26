import { HiOutlineMail } from "react-icons/hi"; 
import { BsTelephone } from "react-icons/bs"; 
import { TbMessageChatbot } from "react-icons/tb"; 
import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaFacebookMessenger } from 'react-icons/fa';
import { TfiHelpAlt } from 'react-icons/tfi';
import { CiCircleInfo } from 'react-icons/ci';
import './main.css';

function Support() {
  return (
    <Dropdown className="custom-dropdown mt-1">
      <Dropdown.Toggle id="dropdown-basic" className="d-flex align-items-center">
        <FontAwesomeIcon icon={faHeadset} className="ms-1 me-1 headset" />
        <span className="ms-1 me-1">Support</span>
      </Dropdown.Toggle>
      <Dropdown.Menu className="custom-dropdown-menu dropdown-menu-end" style={{ width: 'max-content' }}>
        <Container fluid>
          <Row className="support-row">
            <Col className="support">
              <p className="mt-2" style={{ width: '220px' }}>Support Now</p>
              <Dropdown.Item href="#/action-1" className="d-flex align-items-center w-100">
              <TbMessageChatbot  className="me-2 mt-2 text-danger" style={{ fontSize: '23px' }}/>
                <span>Quick Chat</span>
                <span className="badge bg-success ms-5 pt-1 ps-2 pe-2 pb-1 rounded-pill">Online</span>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" className="d-flex align-items-center mt-2 w-100">
                <IoLogoWhatsapp className="me-2 mt-2 text-success" style={{ fontSize: '23px' }} />
                <span className="mt-2">Whatsapp</span>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-2" className="d-flex align-items-center mt-2 w-100">
                <FaFacebookMessenger className="me-2 mt-2 text-primary" style={{ fontSize: '23px' }} />
                <span className="mt-2">Facebook Messenger</span>
              </Dropdown.Item>
              <div className="border-top"></div>
              <Dropdown.Item href="#/action-2" className="d-flex align-items-center mt-2 w-100">
                <BsTelephone className="me-2 mt-2 text-Secondary" style={{ fontSize: '23px' }}/>
                <span className="mt-2">+91 9988775566</span>
              </Dropdown.Item>
              <div className="border-top"></div>
              <Dropdown.Item href="#/action-2" className="d-flex align-items-center mt-2 w-100">
                <HiOutlineMail className="me-2 mt-2 text-Secondary" style={{ fontSize: '23px' }}/>
                <span className="mt-2">contact@student.com</span>
              </Dropdown.Item>
            </Col>
            <Col className="d-flex justify-content-center align-items-center vr-col">
            <div className="border-end h-100"></div>
            </Col>
            <Col className="support quick-links-col">
              <p className="mt-2" style={{ width: '144px' }}>Quick Links</p>
              <Dropdown.Item href="#/action-6" className="quick-link d-flex align-items-center w-100">
               <TfiHelpAlt style={{ fontSize: '22px' }} className="me-3"/>
                <span className='me-4'>Help Center</span>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-6" className="quick-link d-flex align-items-center w-100">
               <CiCircleInfo style={{ fontSize: '27px' }} className="me-2"/>
                <span className='me-5 ms-1'>How It works</span>
              </Dropdown.Item>
            </Col>
          </Row>
        </Container>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export default Support;