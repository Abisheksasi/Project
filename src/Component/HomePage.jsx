import React from 'react';
import './Component.css';
import Bead from '../image/beds.svg';
import Uni from '../image/universities.svg';
import Cit from '../image/cities.svg';
import Rat from '../image/rating.svg';
import Container from 'react-bootstrap/Container';

const HomePage = () => {
  return (
    <Container className='mt-5' fluid>
      <ul className="gallery gap-3">
        <li className='homepage '>
          <div className="card border-0 home">
            <img src={Bead} className="mt-3 ms-3 image" alt="..." />
            <div className="card-body home-body">
              <h1 className='text-dark text-start'>1 M+ Beds</h1>
              <p className='text-start'>Book your perfect place from an  extensive list of options.</p>
            </div>
          </div>
        </li>
        <li className='homepage'>
          <div className="card border-0 home">
            <img src={Uni} className="mt-3 ms-3 image" alt="..." />
            <div className="card-body home-body">
              <h1 className='text-dark text-start'>800+ Universities</h1>
              <p className='text-start'>Find the best student homes near prestigious universities.</p>
            </div>
          </div>
        </li>
        <li className='homepage'>
          <div className="card border-0 home">
            <img src={Cit} className="mt-3 ms-3 image" alt="..." />
            <div className="card-body home-body">
              <h1 className='text-dark text-start'>250+ Global Cities</h1>
              <p className='text-start'>We operate in major cities around the world.</p>
            </div>
          </div>
        </li>
        <li className='homepage'>
          <div className="card border-0 star">
            <img src={Rat} className="mt-4 ms-3 image" alt="..." />
            <div className="card-body home-body star-body">
              <h1 className='text-dark text-start'>4.8/5 on Trustpilot</h1>
              <p className='text-start'>4800+ students have rated us excellent for our services.</p>
            </div>
          </div>
        </li>
      </ul>
    </Container>
  );
};
export default HomePage;