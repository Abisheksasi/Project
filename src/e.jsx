import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Container, Row, Col, Carousel, Form } from 'react-bootstrap';
import { AiOutlineHeart } from 'react-icons/ai';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { IoLocationOutline, IoWalkOutline } from 'react-icons/io5';
import { BiTrain, BiBus } from 'react-icons/bi';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchHostels,
  setMinPrice,
  setMaxPrice,
  setMoveInMonth,
  setSortByPrice,
} from '../actions';
import Navbars from './Navbar';

const HostelList = () => {
  const { countryName, cityName } = useParams();
  const dispatch = useDispatch();
  const { hostels, minPrice, maxPrice, moveInMonth, sortByPrice } = useSelector((state) => state.hostelReducer);

  useEffect(() => {
    dispatch(fetchHostels(countryName, cityName)); // Fetch hostels on component mount
  }, [dispatch, countryName, cityName]);

  const handleAddToCart = (hostel) => {
    // Implement addToCart logic here if using CartContext or similar
    console.log(`Added ${hostel.hostelname} to cart!`);
  };

  const filteredHostels = hostels
    .filter(hostel => hostel.cityCenter <= maxPrice && hostel.cityCenter >= minPrice)
    .filter(hostel => moveInMonth ? hostel.Tenancies.some(t => t['Move In'].includes(moveInMonth)) : true)
    .sort((a, b) => sortByPrice === 'lowToHigh' ? a.cityCenter - b.cityCenter : b.cityCenter - a.cityCenter);

  const handleMinPriceChange = (e) => {
    dispatch(setMinPrice(Number(e.target.value)));
  };

  const handleMaxPriceChange = (e) => {
    dispatch(setMaxPrice(Number(e.target.value)));
  };

  const handleMoveInMonthChange = (e) => {
    dispatch(setMoveInMonth(e.target.value));
  };

  const handleSortByPriceChange = (e) => {
    dispatch(setSortByPrice(e.target.value));
  };

  return (
    <Container fluid>
      <Navbars />
      <Row>
        <Col className="Accommodation-details" lg={6}>
          {/* Existing UI code */}
          <Form className="mb-3">
            <Form.Group controlId="priceRange">
              <Form.Label>Price Range:</Form.Label>
              <Form.Control type="range" min={0} max={1000} value={maxPrice} onChange={handleMaxPriceChange} />
              <Form.Control type="range" min={0} max={1000} value={minPrice} onChange={handleMinPriceChange} />
            </Form.Group>
            <Form.Group controlId="moveInMonth">
              <Form.Label>Move In Month:</Form.Label>
              <Form.Control as="select" value={moveInMonth} onChange={handleMoveInMonthChange}>
                <option value="">Any</option>
                <option value="Jul 2024">July 2024</option>
                <option value="Aug 2024">August 2024</option>
                <option value="Sep 2024">September 2024</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="sortByPrice">
              <Form.Label>Sort By Price:</Form.Label>
              <Form.Control as="select" value={sortByPrice} onChange={handleSortByPriceChange}>
                <option value="lowToHigh">Low to High</option>
                <option value="highToLow">High to Low</option>
              </Form.Control>
            </Form.Group>
          </Form>
          <ul>
            {filteredHostels.map((hostel, index) => (
              <div className="card mb-3 mt-5" key={index}>
                <Row>
                  <Col lg={5} md={5} sm={5}>
                    <Carousel prevIcon={<GrPrevious />} nextIcon={<GrNext />} className='position-relative'>
                      {/* Carousel items */}
                    </Carousel>
                    <button onClick={() => handleAddToCart(hostel)} className="btn btn-light position-absolute cart-btn">
                      <AiOutlineHeart className="cart-icon position-absolute" />
                    </button>
                  </Col>
                  <Col lg={7} md={7} sm={7} className="accommodation-content">
                    {/* Hostel details */}
                  </Col>
                </Row>
              </div>
            ))}
          </ul>
          {/* Pagination and other UI elements */}
        </Col>
      </Row>
    </Container>
  );
};

export default HostelList;
