import './Component.css';
import { GoVerified } from "react-icons/go";
import { PiMoneyThin } from "react-icons/pi";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';

function Hero() {
    return (
        <div>
            <div className='text-center heropage'>
                <h1>Home away from home!</h1>
                <h6 className='mt-1'>Book student accommodations near top universities and cities across the globe.</h6>
            </div>
            <div className="container heropage">
                <div className="justify-content-center d-flex flex-row detail-container">
                    <div className="mb-2">
                        <div className="detail rounded-pill d-flex align-items-center mt-1">
                            <GoVerified className="detail-icon-verify" />
                            <span className=''>Verified Properties</span>
                        </div>
                    </div>
                    <div className="ms-2 mb-2">
                        <div className="detail rounded-pill d-flex align-items-center mt-1">
                            <FontAwesomeIcon icon={faHeadset} className=" detail-icon-head" />
                            <span>24x7 Assistance</span>
                        </div>
                    </div>
                    <div className="ms-2 mt-1">
                        <div className="detail rounded-pill d-flex align-items-center">
                            <PiMoneyThin className="detail-icon-money" />
                            <span>Price Match Guarantee</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;
