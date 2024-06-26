import React, { useState, useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Carousel, Form } from 'react-bootstrap';
import { AiOutlineHeart } from 'react-icons/ai';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { IoLocationOutline, IoWalkOutline } from 'react-icons/io5';
import { BiTrain, BiBus } from 'react-icons/bi';
import data from '../data.json';
import { CartContext } from './CartContext';
import Navbars from './Navbar';

const HostelList = () => {
  const { countryName, cityName } = useParams();
  const country = data.countries.find((c) => c.country === countryName);
  const city = country ? country.cities.find((c) => c.name === cityName) : null;
  const accommodations = city ? city.hostels : [];
  const { addToCart } = useContext(CartContext);

  const [activeTab, setActiveTab] = useState(0);
  const [minPrice, setMinPrice] = useState(null); // Initially set to null or another suitable default
  const [maxPrice, setMaxPrice] = useState(null); // Initially set to null or another suitable default
  const [moveInMonth, setMoveInMonth] = useState('');
  const [sortByPrice, setSortByPrice] = useState('lowToHigh'); // lowToHigh or highToLow
  const [filteredHostels, setFilteredHostels] = useState([]);

  const itemsPerPage = 5;
  const totalTabs = Math.ceil(filteredHostels.length / itemsPerPage);

  useEffect(() => {
    // Filter hostels based on current filter settings
    filterHostels();
  }, [minPrice, maxPrice, moveInMonth, sortByPrice]);

  const filterHostels = () => {
    const filtered = accommodations
      .filter(hostel => (minPrice === null || hostel.cityCenter >= minPrice) && (maxPrice === null || hostel.cityCenter <= maxPrice))
      .filter(hostel => moveInMonth ? hostel.Tenancies.some(t => t['Move In'].includes(moveInMonth)) : true)
      .sort((a, b) => sortByPrice === 'lowToHigh' ? a.budget - b.budget : b.budget - a.budget);

    setFilteredHostels(filtered);
  };

  const handleTabChange = (index) => {
    setActiveTab(index);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNext = () => {
    setActiveTab((prev) => (prev + 1) % totalTabs);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrev = () => {
    setActiveTab((prev) => (prev - 1 + totalTabs) % totalTabs);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleAddToCart = (hostel) => {
    addToCart(hostel);
    console.log(`Added ${hostel.hostelname} to cart!`);
  };

  return (
    <Container fluid>
      <Navbars />
      <Row>
        <Col className="Accommodation-details" lg={6}>
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="#">{countryName}</Link></li>
              <li className="breadcrumb-item"><Link to="#">{city.maincity}</Link></li>
              <li className="breadcrumb-item"><Link to="#">{cityName}</Link></li>
            </ol>
          </nav>
          <div className="Accomodat-head">
            <h5>Student Accommodations in <span>{cityName}</span></h5>
            <h6>Show <span>{city.Showplace}</span> Place </h6>
          </div>
          <Form className="mb-3">
            <Form.Group controlId="priceRange">
              <Form.Label>Price Range:</Form.Label>
              <Form.Control type="range" min={0} max={1000} value={maxPrice || 1000} onChange={(e) => setMaxPrice(parseInt(e.target.value))} />
              <Form.Control type="range" min={0} max={1000} value={minPrice || 0} onChange={(e) => setMinPrice(parseInt(e.target.value))} />
              <p>Min Price: {minPrice !== null ? `$${minPrice}` : 'Any'}</p>
              <p>Max Price: {maxPrice !== null ? `$${maxPrice}` : 'Any'}</p>
            </Form.Group>
            <Form.Group controlId="moveInMonth">
              <Form.Label>Move In Month:</Form.Label>
              <Form.Control as="select" value={moveInMonth} onChange={(e) => setMoveInMonth(e.target.value)}>
                <option value="">Any</option>
                <option value="Jul 2024">July 2024</option>
                <option value="Aug 2024">August 2024</option>
                <option value="Sep 2024">September 2024</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="sortByPrice">
              <Form.Label>Sort By Price:</Form.Label>
              <Form.Control as="select" value={sortByPrice} onChange={(e) => setSortByPrice(e.target.value)}>
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <ul>
            {filteredHostels.slice(activeTab * itemsPerPage, (activeTab + 1) * itemsPerPage).map((hostel, index) => (
              <div className="card mb-3 mt-5" key={index}>
                <Row>
                  <Col lg={5} md={5} sm={5}>
                    <Carousel prevIcon={<GrPrevious />} nextIcon={<GrNext />} className='position-relative'>
                      <Carousel.Item className="img-fluid">
                        <img src={hostel.bedroom} alt="Bedroom" className="w-100 h-100 rounded img-fluid" />
                      </Carousel.Item>
                      <Carousel.Item className="img-fluid">
                        <img src={hostel.kitchen} alt="Kitchen" className="w-100 rounded img-fluid" />
                      </Carousel.Item>
                      <Carousel.Item className="img-fluid">
                        <img src={hostel.bathroom} alt="Bathroom" className="w-100 rounded img-fluid" />
                      </Carousel.Item>
                      <Carousel.Item className="img-fluid">
                        <img src={hostel.comman} alt="Common Area" className="w-100 rounded img-fluid" />
                      </Carousel.Item>
                      <Carousel.Item className="img-fluid">
                        <img src={hostel.exterior} alt="Exterior" className="w-100 rounded img-fluid" />
                      </Carousel.Item>
                    </Carousel>
                    <button onClick={() => handleAddToCart(hostel)} className="btn btn-light position-absolute cart-btn">
                      <AiOutlineHeart className="cart-icon position-absolute" />
                    </button>
                  </Col>
                  <Col lg={7} md={7} sm={7} className="accommodation-content">
                    <Link to={`/country/${countryName}/city/${cityName}/${hostel.hostelname}`} className="details-page" target='_blank'>
                      <li className="accomdate mt-3">
                        <h2>{hostel.hostelname}</h2>
                        <p>{hostel.streetroad}</p>
                        <div className="d-flex flex-row" style={{ marginTop: "-10px" }}>
                          <p><IoLocationOutline className="walk-icon" /><span className="walk-detail ms-1">{hostel.cityCenter} from City Center</span></p>
                          <p className="ms-1">(<IoWalkOutline className="walk-icon" /><span className="walk-detail ms-1">{hostel.walk}</span> <BiBus className="walk-icon ms-1" /><span className="walk-detail ms-1">{hostel.bus}</span> <BiTrain className="walk-icon ms-1" /><span className="walk-detail ms-1">{hostel.train}</span>)</p>
                        </div>
                      </li>
                    </Link>
                  </Col>
                </Row>
              </div>
            ))}
          </ul>
          <div className="pagination mt-5 d-flex justify-content-center">
            <button className="btn hostel-rev" onClick={handlePrev} disabled={activeTab === 0}>
              <GrPrevious />
            </button>
            {Array.from({ length: totalTabs }, (_, index) => (
              <button key={index} className={`btn mx-1 ${index === activeTab ? 'active' : ''}`} onClick={() => handleTabChange(index)} id='hostel-btn'>
                {index + 1}
              </button>
            ))}
            <button className="btn hostel-next mx-1" onClick={handleNext} disabled={activeTab === totalTabs - 1}>
              <GrNext />
            </button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HostelList;
