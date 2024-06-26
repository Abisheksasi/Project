import React, { useContext, useState, useEffect } from 'react';
import { Link} from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { CartContext } from './CartContext';
import shortlist from '../image/shortlist-empty-state.svg';
import { GrNext, GrPrevious } from 'react-icons/gr';

const CartPage = () => {
    const { cart, removeFromCart } = useContext(CartContext);
    const [activeTab, setActiveTab] = useState(0);
    const [filteredHostels, setFilteredHostels] = useState([]);
    const itemsPerPage = 1;
    const totalTabs = Math.ceil(filteredHostels.length / itemsPerPage);

    useEffect(() => {
        setFilteredHostels(cart);
    }, [cart]);

    const handleNext = () => {
        setActiveTab((prev) => (prev + 1) % totalTabs);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handlePrev = () => {
        setActiveTab((prev) => (prev - 1 + totalTabs) % totalTabs);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleTabChange = (index) => {
        setActiveTab(index);
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <Container fluid>
            <Row>
                <Col>
                    <div className='cart-card'>
                        <nav aria-label="breadcrumb">
                            <ul className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item"><Link to="/profile">Profile</Link></li>
                                <li className="breadcrumb-item"><Link to="/shortlist">Shortlist</Link></li>
                            </ul>
                        </nav>
                        <h2>Shortlist</h2>
                        <div className='card mt-3'>
                            {cart.length === 0 ? (
                                <div className='shortlist-page'>
                                    <img src={shortlist} alt="Shortlist" className='w-50' />
                                    <h6 className='mt-3'>No property shortlisted</h6>
                                    <Link to='/' className='Expoler ps-3 pt-2 pe-3 pb-2 mt-4 rounded'>Explore Properties</Link>
                                </div>
                            ) : (
                                <ul>
                                    {cart.slice(activeTab * itemsPerPage, (activeTab + 1) * itemsPerPage).map((item, index) => (
                                            <li className="card mb-3 w-75 mt-3">
                                                <Row>
                                                    <Col lg={5}>
                                                        <img src={item.bedroom} alt="Bedroom" className="w-100 rounded img-fluid" />
                                                    </Col>
                                                    <Col lg={7} className="accommodation-content">
                                                        <h2>{item.hostelname}</h2>
                                                        <p>{item.streetroad}</p>
                                                        <h5>From <span>{item.budget}</span></h5>
                                                        <button onClick={() => removeFromCart(item)} className="btn btn-danger">
                                                            Remove from Cart
                                                        </button>
                                                    </Col>
                                                </Row>
                                            </li>
                                    ))}
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
                                </ul>
                            )}
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default CartPage;
