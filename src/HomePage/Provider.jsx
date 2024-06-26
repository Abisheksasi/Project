import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CountryList from '../CountryList';
import HostelList from '../HostelList';
import HostelDetails from '../HostelDetails';
import CartPage from '../CartPage';
import Navbar from '../Navbar';
import { CartProvider } from '../CartContext';
import Navigation from './Navigation';
function Provider() {
    return (<CartProvider>
        <Router>
            <Navbar />
            <Routes>
                <Route>{<Navigation/>}</Route>
                <Route path="/" element={<CountryList />} />
                <Route path="/country/:countryName/city/:cityName" element={<HostelList />} />
                <Route path="/country/:countryName/city/:cityName/:hostelName" element={<HostelDetails />} />  {/* add HostelDetails route */}
                <Route path="/cart" element={<CartPage />} />
            </Routes>
        </Router>
    </CartProvider>
    )
}
export default Provider;