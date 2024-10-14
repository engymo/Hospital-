import React from 'react';
import "./Footer.css";
import footerlogo from "../assist/download.png"
import footericon from "../assist/download (14).png"
import lineh from "../assist/download (19).png"
import facebookimg from "../assist/download (8).png"
import insataimg from "../assist/download (6).png"
import twitterimg from "../assist/download (7).png"
import linkedimg from "../assist/download (5).png"
import plsimg from "../assist/download (15).png"
import cirlcleimg from "../assist/download (16).png"


export default function Footer() {
    return (
        <footer className="footer mt-5" >
            <div className="footer-top pt-5 " style={{ position: "relative" }}>
                <div className="container">
                    <div className="mb-4 ">
                        <img className='footericon' src={footericon} alt='footericon' style={{ width: "7%", position: "absolute", top: "0", bottom: "0" }} />
                    </div>
                    <div className="row">
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="widget widget_info">

                                <div className="footer-logo">
                                    <a href="/react/">
                                        <img src={footerlogo} alt="footerlogo" />
                                    </a>
                                </div>
                                <div className="">
                                    <p className='ft-contact'>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.</p>
                                    <div className="contact-bx" style={{ position: "relative", zIndex: "1" }}>
                                        <div className="contact-number fw-bold d-flex  align-items-center ">
                                            <i className="bi bi-telephone-fill p-3 fs-4" style={{ color: "white", background: "#f17723" }}></i>
                                            <div className="ps-2">
                                                <span style={{ color: "#f17723", }}>Contact Us</span>
                                                <h4 className="number" style={{ color: "#1f2278", }}>+01 123 456 7890</h4>
                                            </div>
                                        </div>
                                        <img className='cirlcleimg d-none d-lg-block' src={cirlcleimg} alt='cirlcleimg' style={{ width: "35%", position: "absolute", left: "-15%", bottom: "-75%", zIndex: "-2" }} />

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <div className="widget footer_widget ">
                                <h3 className="footer-title" style={{ color: "#1f2278", }}>Quick Links</h3>
                                <img src={lineh} alt='lineh' />

                                <ul>
                                    <li>
                                        <a href="/react/about-us"><span>About Us</span></a>
                                    </li>

                                    <li>
                                        <a href="/react/services"><span>Services</span></a>
                                    </li>

                                    <li>
                                        <a href="/react/booking"><span>Booking</span></a>
                                    </li>

                                    <li>
                                        <a href="/react/faq"><span>Faq's</span></a>
                                    </li>

                                    <li>
                                        <a href="/react/blog-grid"><span>Blogs</span></a>
                                    </li>

                                    <li>
                                        <a href="/react/team"><span>Out Team</span></a>
                                    </li>

                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-6">
                            <div className="Our-Service">
                                <h3 className="footer-title" style={{ color: "#1f2278", }}>Our Service</h3>
                                <img src={lineh} alt='lineh' />
                                <ul>
                                    <li>
                                        <a href="/react/service-detail"><span>Dental Care</span></a>
                                    </li>
                                    <li>
                                        <a href="/react/service-detail"><span>Cardiac Clinic</span></a></li><li>
                                        <a href="/react/service-detail"><span>Massege Therapy</span></a></li><li>
                                        <a href="/react/service-detail"><span>Cardiology</span></a></li><li>
                                        <a href="/react/service-detail"><span>Precise Diagnosis</span></a></li><li>
                                        <a href="/react/service-detail"><span>Abmbulance Services</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-6">
                            <img className='plsimg d-none d-lg-block' src={plsimg} alt='plsimg' style={{ width: "6%", position: "absolute", top: "26%", right: "7%" }} />

                            <div className="Subcribe">
                                <h3 className="footer-title" style={{ color: "#1f2278", }}>Subcribe</h3>
                                <img src={lineh} alt='lineh' />

                                <form className="subscribe-form subscription-form ">
                                    <div className="input-group">
                                        <input name="email" className="form-control" placeholder="Email Address" type="email" />
                                    </div>

                                    <button name="submit" value="Submit" type="submit" className="btn btn-secondary shadow w-100 my-3 py-2" style={{ background: "#f17723", border: 'none' }}>Subscribe Now</button>
                                </form>

                                <div className="footer-social-link ">

                                    <a target="_blank" href="https://www.facebook.com/"><img className="ps-2" src={facebookimg} alt="facebookimg" /> </a>



                                    <a target="_blank" href="https://twitter.com/"> <img className="ps-2" src={insataimg} alt="insataimg" /> </a>



                                    <a target="_blank" href="https://www.instagram.com/"> <img className="ps-2" src={twitterimg} alt="twitterimg" /> </a>



                                    <a target="_blank" href="https://www.linkedin.com/"><img className="ps-2" src={linkedimg} alt='linkedimg' /></a>


                                </div>

                            </div>
                            <img className='footericon d-none d-lg-block' src={footericon} alt='footericon' style={{ width: "7%", position: "absolute", bottom: "-2%", right: "7%" }} />

                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="footer-bottom">
                    <div className="row">
                        <div className="col-12 text-center">
                            <hr className='m-5' />
                            <p className="copyright-text">Copyright © 2023 Design &amp; Developed by
                                <a href="https://themeforest.net/user/themetrades" target="_blank" > <span style={{ color: "#f17723" }}>ThemeTrades</span></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
