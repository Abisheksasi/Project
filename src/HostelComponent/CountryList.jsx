import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GrPrevious, GrNext } from "react-icons/gr";
import data from '../data.json';
import './Hostelcomponent.css';

const CountryList = () => {
  const [selectedCountry, setSelectedCountry] = useState(data.countries[0].country);
  const [activeIndex, setActiveIndex] = useState(0); // State to track active carousel item

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setActiveIndex(0); // Reset carousel to first item when changing country
  };

  const selectedData = data.countries.find(country => country.country === selectedCountry);

  // Split cities into chunks of 12 for carousel items
  const Split = [];
  for (let i = 0; i < selectedData.cities.length; i += 12) {
    Split.push(selectedData.cities.slice(i, i + 12));
  }

  const handlePrev = () => {
    setActiveIndex(prevIndex => prevIndex === 0 ? Split.length - 1 : prevIndex - 1);
  };

  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % Split.length);
  };

  return (
    <div className="container Popular">
      <h1>Popular Cities Across the Globe</h1>
      <p>Book student accommodations near top cities and universities around the world</p>
      <ul className="d-flex no-list-style globel gap-2 me-5 w-100" id="myTab" role="tablist">
        {data.countries.map((country, index) => (
          <li key={index} className='golbel d-flex flex-row country'>
            <Link to="#" onClick={() => handleCountryClick(country.country)} className={selectedCountry === country.country ? 'active' : ''} id='nav-button'>
              <img src={country.countryImage} className="country-flag" alt={country.country} />
              {country.country}
            </Link>
          </li>
        ))}
      </ul>
      {selectedData && (
        <div className="content position-relative container me-5">
                            {Split.length > 1 && (
              <div className="carousel-controls position-absolute w-100 d-flex justify-content-between align-items-center">
                <button className="btn me-2 city-prev" onClick={handlePrev}><GrPrevious /></button>
                <button className="btn ms-2 city-next" onClick={handleNext}><GrNext /></button>
              </div>
            )}
          <div id="cityCarousel" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {Split.map((chunk, index) => (
                <div key={index} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                  <div className="d-flex flex-wrap">
                    {chunk.map((city, cityIndex) => (
                      <Link key={cityIndex} to={`/country/${selectedCountry}/city/${city.name}`} className="city mt-3 position-relative" target='_blank'>
                        <img src={city.cityimage} alt={city.name} className="d-block w-100" />
                        <button className='city-button position-absolute'>{city.name}</button>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CountryList;
