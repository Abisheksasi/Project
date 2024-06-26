import { AiOutlineUsergroupAdd } from "react-icons/ai"; 
import { CiUser } from "react-icons/ci"; 
import { FaUserCircle } from "react-icons/fa"; 
import Dropdown from 'react-bootstrap/Dropdown';
import './main.css';
import { FaBars } from "react-icons/fa6";
import { PiCalendarStarThin } from "react-icons/pi";
import { PiMedalThin } from "react-icons/pi";
import { PiHandshakeThin } from "react-icons/pi";
import { PiListChecksThin } from "react-icons/pi";
import Container from 'react-bootstrap/Container';
function User() {
  return (
    <Dropdown className="custom-dropdown">
        <div className='user me-4'>
        <Dropdown.Toggle id="dropdown-basic" className='me-2'>
            <FaUserCircle style={{fontSize:'22px'}}className='login-icon  me-1'/>
        <span><FaBars style={{fontSize:'20px'}} className='bar-icon ms-1 me-1'/></span>
      </Dropdown.Toggle>
      </div>
      <Dropdown.Menu className="custom-dropdown-menu dropdown-menu-end" style={{ width: 'max-content' }}>
        <Container fluid className='support'>
              <p className='mt-2' style={{ width: 'fit-conent' }}>Login to Continue</p>
              <Dropdown.Item href="#/action-1" className='support d-flex align-items-center mt-2' style={{ width: 'fit-conent' }}>
              <CiUser  style={{fontSize: '22px', fontWeight: '400' }} className='me-2' />
                <span className='ms-1'>My Profile</span>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-3" className='d-flex align-items-center mt-2'  style={{ width: 'fit-conent' }}>
              <PiCalendarStarThin style={{ fontSize: '20px', fontWeight: '400' }} className='me-2 mt-2' />
                <span className='mt-2 ms-1'>Booking</span>
              </Dropdown.Item>
              <hr className='w-100'></hr>
              <Dropdown.Item href="#/action-2" className='d-flex align-items-center mt-2'  style={{ width: 'fit-conent' }}>
             <AiOutlineUsergroupAdd style={{ fontSize: '20px', fontWeight: '400' }} className='me-2 mt-2'/>
                <span className='mt-2 ms-2'>Group Booking</span>
                <span className='new ms-5 pt-1 ps-2 pe-2 pb-1' style={{fontSize: '12px', fontWeight: '400' }} >New</span>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-4" className='contact d-flex align-items-center mt-2'  style={{ width: 'fit-conent' }}>
              <PiMedalThin  style={{ fontSize: '20px', fontWeight: '400' }} className='me-2 mt-2' />
                <span className='mt-2 ms-2'>Refer a firend</span>
                <span className='but ms-5 pt-1 ps-2 pe-2 pb-1'>Get 50 GBP</span>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-5" className='contact d-flex align-items-center mt-2'  style={{ width: 'fit-conent' }}>
              <PiHandshakeThin style={{fontSize: '20px', fontWeight: '400' }} className='me-2 mt-2' />
                <span className='mt-2 ms-2'>Partner With Us</span>
              </Dropdown.Item>
              <Dropdown.Item href="#/action-6" className='contact d-flex align-items-center mt-2'  style={{ width: 'fit-conent' }}>
              <PiListChecksThin  style={{fontSize: '20px', fontWeight: '400' }} className='me-2 mt-2' />
                <span className='mt-2 ms-2'>List With us</span>
              </Dropdown.Item>
        </Container>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default User;