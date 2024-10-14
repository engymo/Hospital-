import React from 'react';
import './Home.css';
import headerimg from '../assist/doctor.7c2bc96d67d3eba1d64a.png'
import titleimg from '../assist/download (11).png'
import sectionimg from '../assist/shape1.1112f1ac0dc18e511a91.png'
import msgbutn from '../assist/download (10).png'
import pluimg from '../assist/download (12).png'
import squerimg from '../assist/download (9).png'


export default function Home() {
  return (
    <header>
      <img className='msgbtn d-none d-lg-block' src={msgbutn} alt='msgbtn' />
      <div className='head-content'>
        <div className='container '>
          <div className='row align-items-center'>
            <div className='col-md-12 col-lg-6 header-content '>
           
              <img className='title-img' src={titleimg} alt='titleimg' style={{marginLeft:"150px"}} />
             
              <h6 className='text-header fw-bold ps-2'>We Provide All Health Care Solution</h6>
              <h2 className='fw-bolder fs-1'>Protect Your Health And Take Care To Of Your Health</h2>
              <button className='btn-readmore rounded text-white fw-bold'>read more</button>
            </div>
            <div className='col-md-12 col-lg-6'>
              <img className='squerimg d-none d-lg-block' src={squerimg} alt='squerimg' />
              <img className='header-img w-100' src={headerimg} />
            </div>
          </div>
        </div>
      </div>

      <img className='plusimg d-none d-lg-block' src={pluimg} alt='pluimg' />

      <img className='w-100' src={sectionimg} alt='sectionimg' />

    </header>
  )
}
