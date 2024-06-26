import { FiMail } from "react-icons/fi"; 
import { BiPhone } from "react-icons/bi"; 
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { TbMessageChatbot } from "react-icons/tb"; 
import { BsWhatsapp } from "react-icons/bs";
function Help() {
    return (
        <Container className="Need-Help">
            <Row className="Help-center">
                <Col xl={4} lg={12} md={12} sm={12}>
                    <div className='Help'>
                        <h1>Need Help? Connect with us!</h1>
                        <p>Feel free to contact us in case you have any queries.</p>
                    </div>
                </Col>
                <Col xl={2} lg={3} md={3} sm={4}>
                <div className='Chat rounded ms-2 me-2'>
                  <span className='chat-bot rounded ms-1 me-2'>
                  {/* <span className='d-flex flex-row ms-3 me-3'><span className="dot">•</span> 2 Min Replay</span> */}
                  </span>
                  <div className='d-flex justify-content-center mt-4'>
                  <TbMessageChatbot  className="text-danger chat-smile"/>
                  </div>
                  <h6 className='d-flex justify-content-center mb-3'>Live Chat</h6>
                </div>
                </Col>
                <Col xl={2} lg={3} md={3} sm={4}>
                <div className='Chat rounded whatsapp ms-2 me-2'>
                  <span className=' rounded ms-1 me-2 whatsapp-chat'>
                    {/* <span className='d-flex flex-row ms-3 me-3'><span className="dot">•</span> 2 Min Replay</span> */}
                  </span>
                  <div className='d-flex justify-content-center mt-4'>
                  <BsWhatsapp className="me-2 mt-2 whatsapp-icon"/>
                  </div>
                  <h6 className='d-flex justify-content-center mb-3'>Chat On Whatsapp</h6>
                </div>
                </Col>
                <Col xl={2} lg={3} md={3} sm={4}>
                <div className='Chat rounded Email ms-2 me-2'>
                  <div className='d-flex justify-content-center mt-4'>
                  <FiMail className="chat-mail"/>
                  </div>
                  <h6 className='d-flex justify-content-center mb-3'>Email Us</h6>
                </div>
                </Col>
                <Col xl={2} lg={3} md={3} sm={4}>
                <div className='Chat rounded Call ms-2 me-2'>
                  <div className='d-flex justify-content-center mt-4'>
                  <BiPhone className="call-phone"/>
                  </div>
                  <h6 className='d-flex justify-content-center mb-3'>+91 9988776655</h6>
                </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Help;