import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import { CartContext } from './CartContext';

const HostelDetails = () => {
  const { countryName, cityName, hostelName } = useParams();
  const { addToCart } = useContext(CartContext);

  const country = data.countries.find(c => c.country === countryName);
  if (!country) return <div>Country not found.</div>;

  const city = country.cities.find(c => c.name === cityName);
  if (!city) return <div>City not found.</div>;

  const hostel = city.hostels.find(h => h.hostelname === hostelName);
  if (!hostel) return <div>Hostel not found.</div>;

  const handleAddToCart = () => {
    addToCart(hostel);
    console.log(`Added ${hostel.hostelname} to cart!`);
  };

  return (
    <div className="container mt-5">
      <h1>{hostel.hostelname}</h1>
      <p>{hostel.streetroad}</p>
      <button onClick={handleAddToCart} className="btn btn-warning">
        Add to Cart
      </button>
    </div>
  );
};

export default HostelDetails;
