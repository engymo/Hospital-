import React from 'react';
import "./AboutArea.css";
import inputimg from "../assist/mobile.f82d73222992d2101a09.png";
import womanimg from "../assist/women.eb5c49c523f7d6240d33.png";
import heartimg from "../assist/heart.png";
import rightimg from "../assist/right.png";
import sittingimg from "../assist/sitting.png";
import locationimg from "../assist/location.png";
import circleimg from "../assist/circle.png";
import arrowimg from "../assist/download (10).png";




export default function AboutArea() {
    return (
        <div className="container">
            <div className="row align-items-center justify-content-center area-section ">
                <div className=" col-lg-4 col-md-12 appointment-box my-5 ">
                    <div className="appointment-form form-wraper p-2  " style={{background:"white", borderRadius:"20px",height:"90%"}}>
                        <h3 className='mb-4 text-center pt-4 pb-2' style={{color:"#1f2278"}}>Book Appointment</h3>
                        <form className="">
                            <div className="form-group mb-3">
                                <select className="form-select form-control p-3">
                                    <option className=''>Selecty Department</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </select>
                            </div>
                            <div className="form-group mb-3">
                                <select className="form-select form-control p-3">
                                    <option>Select Doctor</option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                </select>
                            </div>
                            <div className="form-group mb-3">
                                <input type="text" className="form-control p-3" placeholder="Your Name" />
                            </div>
                            <div className="form-group mb-3">
                                <input type="number" className="form-control p-3" placeholder="Phone Numbers" />
                            </div>
                            <div className="form-group mb-3">
                                <input type="date" className="form-control p-3" />
                            </div>
                           <div className='d-flex justify-content-center'>
                           <button type="submit" className="btn btn-secondary btn-lg my-2" style={{background:"#f17723", border: 'none'}}>Appointment Now</button>
                           </div>
                        </form>
                        <img className='img-move d-none d-lg-block' src={arrowimg} alt="arrowimg"  style={{ width:"20%",position:"absolute", top: "-5%",left:"-4%", zIndex:"-1"}} />
                    </div>
                </div>
                <div className=" col-lg-7 col-md-6">
                    <div className="appointment-thumb "style={{position:"relative"}}>
                        <img src={inputimg} alt="inputimg"  style={{ width: "100%" }} />
                        <img className="img1" src={womanimg} alt='womanimg' style={{ width: "30%", position:"absolute",bottom:"3%",right:"10%"}} />
                        <img className='img-move d-none d-lg-block' src={heartimg} alt="heartimg"  style={{ width:"15%",position:"absolute",top:"5%", right:"10%" }} />
                        <img className='img-move d-none d-lg-block' src={sittingimg} alt="sittingimg"  style={{ width:"10%",position:"absolute", top: "70%",right:"35%" }} />
                        <img className='img-move d-none d-lg-block' src={locationimg} alt="locationimg"  style={{ width:"15%",position:"absolute", top: "50%",right:"75%" }} />
                        <img className='img-move d-none d-lg-block' src={rightimg} alt="rightimg"  style={{ width:"8%",position:"absolute", top: "20%",right:"90%" }} />
                        <img className='img-move d-none d-lg-block' src={circleimg} alt="circleimg"  style={{ width:"",position:"absolute", bottom: "-15%",right:"-5%" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}
