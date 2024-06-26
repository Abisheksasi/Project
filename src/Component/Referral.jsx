import React, { useState, useRef, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Component.css';

const Referral = () => {
  const Earn = useRef(null);
  const [showPrevButton, setShowPrevButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (Earn.current) {
        const { scrollLeft, scrollWidth, clientWidth } = Earn.current;
        setShowPrevButton(scrollLeft > 0);
        setShowNextButton(scrollLeft < scrollWidth - clientWidth);
      }
    };

    if (Earn.current) {
      Earn.current.addEventListener('scroll', handleScroll);
    }
  }, []);

  const handleNext = () => {
    if (Earn.current) {
      Earn.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (Earn.current) {
      Earn.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
    }
  };
  return (
    <div className='Refer mt-5'>
      <h1 className='Heading text-start'>Amber Referral Program and Offers</h1>
      <p className='Paragrph text-start'>Several promotions, deals and special offers crafted just for you.</p>
      <div className="position-relative ms-3 me-3">
        <div className="Referral-container" ref={Earn}>
          <ul className="Referral list-unstyled d-flex gap-3">
            <li className='Win rounded text-start'>
              <h1 className='text-start'>Win £50 in just a few steps! Refer a friend and earn your reward</h1>
              <div className='color'></div>
              <p className='text-start'>Turn connections into rewards. Get credited after successful booking.</p>
              <button className='pt-1 ps-3 pe-3 pb-1'>Refer Now</button>
            </li>
            <li className='Win rounded text-start Cashback'>
              <h1 className='text-start'>Get additional £20 cashback on your booking!</h1>
              <div className='color'></div>
              <p className='text-start'>Book your student accommodation via the amber app to avail this offer!</p>
              <button className='pt-1 ps-3 pe-3 pb-1'>Avail Now</button>
            </li>
            <li className='Win rounded text-start Save'>
              <h1 className='text-start'>Save up to <span> £300</span> with amber <span>+</span></h1>
              <div className='color'></div>
              <p className='text-start'>Get exclusive discounts from 150+ trusted partners at this one-stop student platform</p>
              <button className='pt-1 ps-3 pe-3 pb-1'>Claim Now</button>
            </li>
          </ul>
        </div>
        {showPrevButton && (
          <button className="btn position-absolute top-50 start-0 translate-middle-y border-0 bg-light pervious" onClick={handlePrev}>
            <FaChevronLeft />
          </button>
        )}
        {showNextButton && (
          <button className="btn position-absolute top-50 end-0 translate-middle-y border-0 bg-light next" onClick={handleNext}>
            <FaChevronRight />
          </button>
        )}
      </div>
    </div>
  );
};

export default Referral;