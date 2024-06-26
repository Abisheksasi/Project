import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { IoMdHeartEmpty } from 'react-icons/io';
import Logo from '../image/logo.svg';
import { CartContext } from './CartContext';
import Download from '../HomePage/Download';
import Support from '../HomePage/Support';
import Login from '../HomePage/Login';
import User from '../HomePage/User';
import Mobile from '../HomePage/Mobile';
import '../App.css';

function Navbars() {
  const [showPopup, setShowPopup] = useState(false);
  const [navbarBackground, setNavbarBackground] = useState(false);
  const { cart } = useContext(CartContext);

  const handlePopupToggle = () => {
    setShowPopup(!showPopup);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarBackground(true);
    } else {
      setNavbarBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className={`navbar navbar-expand-lg navbar-light fixed-top ${navbarBackground ? 'navbar-scrolled' : ''}`} style={{ backgroundColor: 'white' }}>
        <div className="container-fluid">
          <Link className="navbar-brand ms-4" to="/">
            <img src={Logo} alt='Logo' style={{ fill: "#0000" }} />
          </Link>
          <button className="navbar-toggler" type="button" onClick={handlePopupToggle} aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link text-black">
                  <Download />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black">
                  <Support className="text-black"/>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black mt-1" to='/cart'>
                  <div className='short'>
                    <IoMdHeartEmpty className='ms-1 me-1 mt-2 mb-2 short-icon' />
                    <span className='ms-1 mt-2 mb-1 me-2'>Shortlist</span>({cart.length})
                  </div>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black mt-1">
                  <Login />
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black mt-1">
                  <User />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showPopup && <Mobile onClose={handlePopupToggle} />}
      <div style={{ height: '100px' }}></div>
    </div>
  );
}

export default Navbars;
