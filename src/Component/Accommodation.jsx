import React from 'react';
import './Component.css';
import Fast from '../image/fast.svg';
import Expert from '../image/expert.svg';
import Price from '../image/price.svg';
import Verify from '../image/verified.svg';
import Container from 'react-bootstrap/Container';

const Accommodation = () => {
  return (
    <Container className='mt-5 Accommodation' fluid>
      <h1 className='text-start Heading'>Book your Perfect Accommodation</h1>
      <p className='text-start Paragraph'>Take the hassle out of securing your student home for the best years of your life</p>
      <ul className="gallery gap-3 mt-3">
        <li className='homepage'>
          <div className="card border-0 home">
            <img src={Fast} className="mt-3 ms-3 image" alt="..." />
            <div className="card-body home-body">
              <h1 className='text-dark text-start'>Quick & easy bookings</h1>
              <p className='text-start'>Time is money. Save both when you book with us.</p>
            </div>
          </div>
        </li>
        <li className='homepage'>
          <div className="card border-0 home">
            <img src={Expert} className="mt-3 ms-3 image" alt="..." />
            <div className="card-body home-body">
              <h1 className='text-dark text-start'>Price Match Guarantee</h1>
              <p className='text-start'>Find a lower price and we'll match it.No questions asked.</p>
            </div>
          </div>
        </li>
        <li className='homepage'>
          <div className="card border-0 home">
            <img src={Verify} className="mt-3 ms-3 image" alt="..." />
            <div className="card-body home-body">
              <h1 className='text-dark text-start'>24x7 Assistance</h1>
              <p className='text-start'>If you have a doubt or a query, we’re always a call away.</p>
            </div>
          </div>
        </li>
        <li className='homepage'>
          <div className="card border-0 home">
            <img src={Price} className="mt-3 ms-3 image" alt="..." />
            <div className="card-body home-body">
              <h1 className='text-dark text-start'>100% Verified Listings</h1>
              <p className='text-start'>We promise to deliver what you see on the website.</p>
            </div>
          </div>
        </li>
      </ul>
    </Container>
  );
};
export default Accommodation;