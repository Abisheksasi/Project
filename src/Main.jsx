import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from "./HomePage/Navigation";
import HomePage from "./Component/HomePage";
import Accommodation from "./Component/Accommodation";
import Easy from "./Component/EasySteps";
import House from "./Component/House";
import Help from "./Component/Help";
import Footer from "./Component/Footer";
import Trustpilot from "./Component/Trustpilot";
import Referral from "./Component/Referral";
import CountryList from './HostelComponent/CountryList';
import HostelList from './HostelComponent/HostelList';
import HostelDetails from './HostelComponent/HostelDetails';
import CartPage from './HostelComponent/CartPage';
import { CartProvider } from './HostelComponent/CartContext';

function Main() {
    return (
        <div>
            <CartProvider>
                <Router>
                    <Routes>
                        <Route path="/" element={
                            <>
                                <Navigation />
                                <HomePage />
                                <CountryList />
                                <Referral />
                                <Accommodation />
                                <Trustpilot />
                                <Easy />
                                <House />
                                <Help />
                            </>
                        } />
                        <Route path="/country/:countryName/city/:cityName" element={<HostelList />} />
                        <Route path="/country/:countryName/city/:cityName/:hostelName" element={<HostelDetails />} />
                        <Route path="/cart" element={<CartPage />} />
                    </Routes>
                </Router>
                <Footer />
            </CartProvider>
        </div>
    );
}

export default Main;
