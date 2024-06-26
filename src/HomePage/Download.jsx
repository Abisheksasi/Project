import { TbMessageChatbot } from "react-icons/tb"; 
import { IoPricetagsOutline } from "react-icons/io5";
import { BiCheckCircle } from "react-icons/bi"; 
import { BiCalendarCheck } from "react-icons/bi"; 
import React, { useState, useEffect, useRef } from 'react';
import Apps from '../image/App2.webp';
import Apps2 from '../image/App.webp';
import './main.css';
import { IoIosCloseCircleOutline } from "react-icons/io";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Sacn from '../image/QRcode.svg';
import Play from '../image/playStoreAppQR-hd.avif';
import Appel from '../image/appStoreAppQR-hd.avif';

function Download() {
  const [showPopup, setShowPopup] = useState(false);
  const popupRef = useRef(null);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const handleClickOutside = (event) => {
    if (popupRef.current && !popupRef.current.contains(event.target)) {
      setShowPopup(false);
    }
  };

  useEffect(() => {
    if (showPopup) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showPopup]);

  return (
    <div className="container mt-1">
      <div className='download' onClick={togglePopup}>
        <img src={Apps} alt='App' className='ms-1 me-1 mt-2 mb-2 App-w' />
        <img src={Apps2} alt='App' className='ms-1 me-1 mt-2 mb-2 App-b' />
        <span className='ms-1 mt-1 mb-1 me-1'>Download App</span>
      </div>
      {showPopup && (
        <div className="popup-container">
          <div className="popup" ref={popupRef}>
            <span className="close" onClick={togglePopup}>
            <IoIosCloseCircleOutline 
                style={{
                  color: "rgb(175, 173, 173)",
                  backgroundColor: '#7a747400',
                  fontSize: '25px',
                  fontWeight: '100'
                }} />
            </span>
            <div className="popup-content">
              <h3>Start your journey from here!</h3>
              <p>More than 1.25 million beds available in 600 cities</p>
              <hr />
              <Container fluid>
                <Row>
                  <Col lg={6} className='QR text-center'>
                    <p className='mt-3'>Scan The QR to download the App</p>
                    <img src={Sacn} alt="QR Code" className='img-fulid' />
                    <p className='mt-3'>You can directly download from</p>
                    <span className='play'><img src={Play} alt="Play Store" /></span>
                    <span className='appel ms-3'><img src={Appel} alt="Appel Store" /></span>
                  </Col>
                  <Col lg={6} className='mt-5'>
                    <div className='popup-box'>
                    <BiCheckCircle style={{ color: "rgb(14, 159, 110)", backgroundColor: '#7a747400', fontSize: '23px', fontWeight: '400' }} className='mt-2 mb-2 ms-3'/>
                      <span className='first ms-3 me-1 mt-5 mb-5'>100%</span>
                      <span className='second me-3 mt-5 mb-5'>Bookings</span>
                    </div>
                    <div className='popup-box mt-4'>
                      <BiCalendarCheck style={{ color: "rgb(14, 159, 110)", backgroundColor: '#7a747400', fontSize: '23px', fontWeight: '400' }} className='mt-2 mb-2 ms-3' />
                      <span className='first ms-3 me-1 mt-5 mb-5'>Quick and Easy</span>
                      <span className='second me-3 mt-5 mb-5'>Verified Listings</span>
                    </div>
                    <div className='popup-box mt-4'>
                    <IoPricetagsOutline style={{ color: "rgb(14, 159, 110)", backgroundColor: '#7a747400', fontSize: '23px', fontWeight: '400' }} className='mt-2 mb-2 ms-3'/>
                      <span className='first ms-3 me-1 mt-5 mb-5'>Price Match </span>
                      <span className='second me-3 mt-5 mb-5'>Guarantee</span>
                    </div>
                    <div className='popup-box mt-4'>
                     <TbMessageChatbot style={{ color: "rgb(14, 159, 110)", backgroundColor: '#7a747400', fontSize: '23px', fontWeight: '400' }} className='mt-2 mb-2 ms-3'/>
                      <span className='first ms-3 me-1 mt-5 mb-5'>24x7 </span>
                      <span className='second me-3 mt-5 mb-5'>Personal Assistance</span>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Download;