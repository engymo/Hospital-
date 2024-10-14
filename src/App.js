
import { Fragment } from 'react';

import React from 'react';

import Navbar from './components/Nav/Navbar';

import  Home from './page/Home';

import Aboutus from './About/Aboutus';

import WorkingProcess from './WorkingProcess/WorkingProcess';

import AboutArea from './AboutArea/AboutArea';

import Footer from './Footer/Footer';



export default function App() {
  return (
    <Fragment>
       <Navbar/>
       <Home/>
       <Aboutus/>
       <WorkingProcess/>
       <AboutArea/>
       <Footer/>
    </Fragment>
  );
}


