import React from 'react';
import logo from '../../assist/download.png';
import './Nav.css';


export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg fixed-top ">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                {/* Logo Section */}
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src={logo} title='logo' alt="MediTro logo" />
                </a>

                {/* Toggle Button for Mobile View */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navigation Links */}
                <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                    <ul className="navbar-nav mb-2 mb-lg-0 d-flex align-items-center">
                        <li className="nav-item me-3">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item dropdown me-3">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                Pages
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">About us</a></li>
                                <li><a className="dropdown-item" href="#">Our Team</a></li>
                                <li><a className="dropdown-item" href="#">FAQ</a></li>
                                <li><a className="dropdown-item" href="#">Booking</a></li>
                                <li><a className="dropdown-item" href="#">Error 404</a></li>
                                <li><a className="dropdown-item" href="#">Login / Register</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown me-3">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                Services
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Services</a></li>
                                <li><a className="dropdown-item" href="#">Service Detail</a></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown me-3">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                Blog
                            </a>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Blogs</a></li>
                                <li><a className="dropdown-item" href="#">Blog Details</a></li>
                            </ul>
                        </li>
                        <li className="nav-item me-3">
                            <a className="nav-link" href="#">Contact Us</a>
                        </li>
                        <li>
                            <i className="bi bi-search fw-bold  me-2"></i>

                        </li>

                    </ul>

                    <button className='d-none d-lg-block btn btn-primary py-2 fw-bold text-shadow'>Contact us <i className="bg-light p-1 px-2 ms-2 rounded bi bi-caret-right-fill icon"></i></button>

                </div>
            </div>
        </nav>
    );
}