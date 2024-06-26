import React, { useState, useRef, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Star from '../image/starTrustpilot.svg';
import Simon from '../image/simon.avif';
import Robert from '../image/Robert.avif';
import Pavneech from '../image/pavneech.avif';
import Ashwini from '../image/Ashwini.png';
import Rat from '../image/rating.svg';
import India from '../image/in_flag.svg';
function Trustpilot() {
    const StudentRating = useRef(null);
    const [showPrevButton, setShowPrevButton] = useState(false);
    const [showNextButton, setShowNextButton] = useState(true);
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };
    useEffect(() => {
        const handleScroll = () => {
            if (StudentRating.current) {
                const { scrollLeft, scrollWidth, clientWidth } = StudentRating.current;
                setShowPrevButton(scrollLeft > 0);
                setShowNextButton(scrollLeft < scrollWidth - clientWidth);
            }
        };

        if (StudentRating.current) {
            StudentRating.current.addEventListener('scroll', handleScroll);
        }
    }, []);
    const handleNext = () => {
        if (StudentRating.current) {
            StudentRating.current.scrollBy({ left: window.innerWidth, behavior: 'smooth' });
        }
    };

    const handlePrev = () => {
        if (StudentRating.current) {
            StudentRating.current.scrollBy({ left: -window.innerWidth, behavior: 'smooth' });
        }
    };

    return (
        <div className="Trustpilot mt-5">
            <h1 className="Heading">What do students have to say about us?</h1>
            <p className="Paragraph">Over 1M students trust amber for their student housing needs</p>
            <button className='trustpilot text-start rounded-pill border border-black-50 d-flex flex-row'>
                <img src={Star} alt="Star" className='ms-3 ' />
                <h6 className='ms-2'>Trustpilot</h6>
                <h6 className='review ms-2 rounded-pill ps-2 pe-2 me-2'>4.8/5</h6>
            </button>
            <div className="position-relative ms-3 me-3">
                <div className="Referral-container" ref={StudentRating}>
                    <ul className="Referral list-unstyled d-flex gap-3 Trustpilot-container">
                        <li className='rounded text-start Trustpilot-container border border-black-50'>
                            <div className='Simon d-flex flex-row'>
                                <img src={Simon} alt="Simon" className='ms-3 mt-3 rounded-circle simon-img' />
                                <h1 className='ms-4 mt-4 simon-img'>Simon Langer <h6>Plymouth College of Art</h6></h1>
                                <img src={Rat} alt="Rating" className='ms-5 me-1 Rating-img simon-img' /> <br />
                            </div>
                            <h5 className='text-secondary text-start ms-4 me-4 mt-2 mb-4 simon-img'>Experience was amazing!! I’m going to Plymouth College of <br /> Art. Great prices & the rent durations are negotiable. Also as <br /> an art student I do appreciate the website design — its clear, <br /> visible & well placed.</h5>
                            <h6 className='rating6 position-relative'>They helped me shortlist, finalise and book a studio for myself for Sept 2023.
                                {!isExpanded && <span id="dots">...</span>}
                                {isExpanded && (
                                    <span id="more">
                                        They have been on their toes, literally to help me get the best available accommodation.
                                    </span>
                                )}      <button onClick={handleToggle} id="myBtn">
                                    {isExpanded ? 'Read less' : 'Read more'}
                                </button></h6>
                            <div className='d-flex flex-row country-rate first-rating'>
                                <img src={India} alt="India flag" className='India-flag position-absolute' />
                                <div className='first-rating'>
                                    <h1 className='ms-2 mb-0 position-absolute'>Shivam Sharma</h1><br />
                                    <h6 className='ms-2 position-absolute'>University Of Leeds</h6>
                                </div>
                            </div >
                        </li>
                        <li className='rounded text-start Trustpilot-container border border-black-50'>
                            <div className='Simon d-flex flex-row'>
                                <img src={Robert} alt="Simon" className='ms-3 mt-3 rounded-circle simon-img' />
                                <h1 className='ms-4 mt-4 simon-img'>Roberto Antonia <h6>University College London</h6></h1>
                                <img src={Rat} alt="Rating" className='ms-5 me-1 Rating-img simon-img' /> <br />
                            </div>
                            <h5 className='text-secondary text-start ms-4 me-4 mt-2 mb-4 simon-img'>Experience was amazing!! I’m going to Plymouth College of <br /> Art. Great prices & the rent durations are negotiable. Also as <br /> an art student I do appreciate the website design — its clear, <br /> visible & well placed.</h5>
                            <h6 className='rating6 position-relative'>The experience of booking my accomodation and clarifying any doubts
                                {!isExpanded && <span id="dots">...</span>}
                                {isExpanded && (
                                    <span id="more">
                                     I might have on that matter was amazing.
                                    </span>
                                )}      <button onClick={handleToggle} id="myBtn">
                                    {isExpanded ? 'Read less' : 'Read more'}
                                </button></h6>
                            <div className='d-flex flex-row country-rate'>
                                <img src={India} alt="India flag" className='India-flag mt-3 position-absolute' />
                                <div>
                                    <h1 className='mt-4 ms-2 mb-0 position-absolute'>Shubham</h1><br />
                                    <h6 className='ms-2 mt-1 position-absolute'>The University Of Western Australia</h6>
                                </div>
                            </div >
                        </li>
                        <li className='rounded text-start Trustpilot-container border border-black-50'>
                            <div className='Simon d-flex flex-row'>
                                <img src={Ashwini} alt="Simon" className='ms-3 mt-3 rounded-circle simon-img' />
                                <h1 className='ms-4 mt-4 simon-img'>Ashwini K <h6>Plymouth College of Art</h6></h1>
                                <img src={Rat} alt="Rating" className='ms-5 me-1 Rating-img simon-img' /> <br />
                            </div>
                            <h5 className='text-secondary text-start ms-4 me-4 mt-2 mb-4 simon-img'>Experience was amazing!! I’m going to Plymouth College of <br /> Art. Great prices & the rent durations are negotiable. Also as <br /> an art student I do appreciate the website design — its clear, <br /> visible & well placed.</h5>
                            <h6 className='rating6 position-relative'>Amber's agent was extremely helpful and kind. The process was very smooth as well. Overall I would give 10/10 to amber.</h6>
                            <div className='d-flex flex-row country-rate'>
                                <img src={India} alt="India flag" className='India-flag mt-3 position-absolute' />
                                <div>
                                    <h1 className='mt-4  ms-2 mb-0 position-absolute'>Vishnupriya</h1><br />
                                    <h6 className='ms-2 mt-1 position-absolute'>De Montfort University</h6>
                                </div>
                            </div >
                        </li>
                        <li className='rounded text-start Trustpilot-container border border-black-50'>
                            <div className='Simon d-flex flex-row'>
                                <img src={Pavneech} alt="Pavneech" className='ms-3 mt-3 rounded-circle simon-img' />
                                <h1 className='ms-4 mt-4 simon-img'>Paveneech Stritagul <h6>Lancaster University</h6></h1>
                                <img src={Rat} alt="Rating" className='ms-5 me-1 Rating-img simon-img' /> <br />
                            </div>
                            <h5 className='text-secondary text-start ms-4 me-4 mt-2 mb-4 simon-img'>Experience was amazing!! I’m going to Plymouth College of <br /> Art. Great prices & the rent durations are negotiable. Also as <br /> an art student I do appreciate the website design — its clear, <br /> visible & well placed.</h5>
                            <h6 className='rating6 position-relative'>Best accommodation at cheapest rates.Very proactive. Gave me all the information I needed at the get go. Thank you so much!</h6>
                            <div className='d-flex flex-row country-rate'>
                                <img src={India} alt="India flag" className='India-flag mt-3 position-absolute'/>
                                <div>
                                    <h1 className='mt-4 ms-2 mb-0 position-absolute'>Anushka Dogra</h1><br />
                                    <h6 className='ms-2 mt-1 position-absolute'>Regent'S University</h6>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                {showPrevButton && (
                    <button className="btn position-absolute top-50 start-0 translate-middle-y border-0 bg-light pervious" onClick={handlePrev}>
                        <FaChevronLeft />
                    </button>
                )}
                {showNextButton && (
                    <button className="btn position-absolute top-50 end-0 translate-middle-y border-0 bg-light next" onClick={handleNext}>
                        <FaChevronRight />
                    </button>
                )}
            </div>
        </div>
    );
}

export default Trustpilot;