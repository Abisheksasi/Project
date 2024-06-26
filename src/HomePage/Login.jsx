import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import './main.css';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { FaFacebook, FaApple } from "react-icons/fa";
import Container from 'react-bootstrap/Container';
import { MdOutlineLogin } from "react-icons/md";
import Googel from '../image/google.png';
function Login() {
    const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();
    const [showPopup, setShowPopup] = useState(false);
    const [buttonClicked, setButtonClicked] = useState(false);
    const [inputClicked, setInputClicked] = useState(false);
    const popupRef = useRef(null);
    const emailValue = watch("email");

    const togglePopup = () => {
        setShowPopup(!showPopup);
    };

    const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef.current.contains(event.target)) {
            setShowPopup(false);
        }
    };
    useEffect(() => {
        if (showPopup) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [showPopup]);

    const onSubmit = (data) => {
        setButtonClicked(true);
        if (!errors.email) {
            alert('Email submitted: ' + data.email);
            reset();
        }
    };

    return (
        <div className="container">
            <div className='download login' onClick={togglePopup} >
                <MdOutlineLogin className='login-icon ms-1 me-1 mt-2 mb-2' style={{ color: "#ffff", fontSize: '20px', fontWeight: '400' }} />
                <span className='login-text ms-1 mt-2 mb-1 me-2' style={{ color: "#ffff" }}>Login</span>
            </div>
            {showPopup && (
                <div className="popup-container">
                    <div className="popup login-popup" ref={popupRef}>
                        <span className="close" onClick={togglePopup}>
                            <IoIosCloseCircleOutline
                                style={{
                                    color: "rgb(175, 173, 173)",
                                    backgroundColor: '#7a747400',
                                    fontSize: '25px',
                                    fontWeight: '100'
                                }} />
                        </span>
                        <div className="popup-content">
                            <h3>Log in or sign up</h3>

                            <Container fluid style={{ width: '100%' }}>
                                <form onSubmit={handleSubmit(onSubmit)} className="mt-4">
                                    <h6 className='social-head'>Email Address</h6>
                                    <input
                                        type="email"
                                        {...register('email', {
                                            required: 'Email is required',
                                            pattern: {
                                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                                message: 'Invalid email format'
                                            }
                                        })}
                                        placeholder="Enter your email"
                                        className={`form-control ${errors.email && buttonClicked ? 'is-invalid' : !errors.email && buttonClicked ? 'is-valid' : ''}`}
                                        onClick={() => setInputClicked(true)}
                                        style={{ borderColor: errors.email ? 'red' : inputClicked ? 'green' : '' }}
                                    />

                                    {errors.email && buttonClicked && <div className="invalid-feedback">{errors.email.message}</div>}
                                    <button
                                        type="submit"
                                        className={`btn btn-success w-100 mt-3 ${emailValue ? '' : 'disabled'}`}
                                        disabled={!emailValue}
                                    >
                                        Continue
                                    </button>
                                    <div className="horizontal-line-with-text">
                                        <span>or</span>
                                    </div>
                                </form>
                                <div className="social-login">
                                    <div className='social'>
                                        <img src={Googel} alt="Google" style={{ width: '36px' }} className='me-2 ps-3 pt-2 pb-2' />
                                        <span>Sing With Google</span>
                                    </div>
                                    <div className=" w-100 me-2 social mt-2" onClick={() => window.location.href = 'https://www.facebook.com/login/'}>
                                        <FaFacebook className="me-2 ps-2 pt-2 pb-2" style={{ fontSize: '40px', color: '#168AFF' }} />
                                        <span>Sing With Facebook</span>
                                    </div>
                                    <div className="  w-100 appelid social mt-2" onClick={() => window.location.href = 'https://appleid.apple.com/'}>
                                        <FaApple className="me-2 ps-2 pt-2 pb-2" style={{ fontSize: '40px' }} />
                                        <span>Sing With Appel</span>
                                    </div>
                                </div>
                                <p className="mt-4 text-center" style={{ fontSize: '10px' }}>
                                    By signing in you agree to our <a href="/privacy-policy" style={{ color: '#ED3A56', fontSize: '10px' }}>Privacy Policy</a> and <a href="/terms-and-conditions" style={{ color: '#ED3A56', fontSize: '10px' }}>Terms & Conditions</a>
                                </p>
                            </Container>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;