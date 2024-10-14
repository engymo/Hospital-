import React from 'react'
import"./WorkingProcess.css"

export default function WorkingProcess() {
    return (
        <div className="container my-lg-5 my-3">

            <div className='text-center my-5'>
                <h6 className='fw-bold fs-5 work-proses px-2' style={{color:"#f17723", }} >Working Process</h6>
                <h3 className='fw-bold fs-1' style={{color:" #1f2278", }}>How we works?</h3>
            </div>

            <div className="row">
                <div className="col-md-12 col-lg-4">
                    <div className='box-content mt-lg-5 mt-4  mb-lg-0 mb-4 pb-5 px-4 'style={{boxShadow:"-1px 1px 30px 10px #D8D2C2", borderRadius:'25px'}}>
                        <div className="box-num mb-3">
                            01
                        </div>
                        <div className=''>
                            <h5 className='fw-bold fs-5 ' style={{color:"#f17723", }} >Make Appointmnet</h5>
                            <p style={{color:"#697565", }}>It is a long established
                                 fact that a reader will be distracted by
                                  the readable content of.</p>
                        </div>
                        <button className='btn' style={{outline:"none", border:"none", background:"#EBF4F6"}}>view more <i class="bg-light p-1 px-2 ms-1 rounded bi bi-caret-right-fill icon"></i></button>

                    </div>
                </div>
                <div className="col-md-12 col-lg-4">
                    <div className='box-content pb-5 px-4 mb-lg-0 mb-4 'style={{boxShadow:"-1px 1px 30px 10px #D8D2C2", borderRadius:'25px', background:"#f17723"}}>
                        <div className="box-num mb-3">
                            02
                        </div>
                        <div className=''>
                            <h5 className='fw-bold fs-5 ' style={{color:"#F5F5F5", }} >Make Appointmnet</h5>
                            <p style={{color:"#F5F5F5", }}>It is a long established
                                 fact that a reader will be distracted by
                                  the readable content of.</p>
                        </div>
                        <button className='btn ' style={{outline:"none", border:"none", background:"#fff", color:"#f17723"}}>view more <i class="bg-light p-1 px-2 ms-1 rounded bi bi-caret-right-fill"></i></button>

                    </div>
                </div>

                <div className="col-md-12 col-lg-4">
                    <div className='box-content  mt-lg-5 mt-0 mb-lg-0 mb-4 pb-5 px-4 'style={{boxShadow:"-1px 1px 30px 10px #D8D2C2", borderRadius:'25px'}}>
                        <div className="box-num mb-3">
                            03
                        </div>
                        <div className=''>
                            <h5 className='fw-bold fs-5 ' style={{color:"#f17723", }} >Make Appointmnet</h5>
                            <p style={{color:"#697565", }}>It is a long established
                                 fact that a reader will be distracted by
                                  the readable content of.</p>
                        </div>
                        <button className='btn' style={{outline:"none", border:"none", background:"#EBF4F6"}}>view more <i class="bg-light p-1 px-2 ms-1 rounded bi bi-caret-right-fill icon"></i></button>

                    </div>
                </div>
            </div>
        </div>



    )
}
