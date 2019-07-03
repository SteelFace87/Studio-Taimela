import './App.css';
import React from 'react';
import SplashPage from './SplashPage';
import Nav from './Nav';
import Expertise from './Expertise';
import Background from './Background';
import Contact from './Contact';
import Footer from './Footer';
import SubSection from './SubSection';

import {
  BrowserRouter as Router
} from 'react-router-dom';


export default function App() {

  return (

    <Router>
      <Nav />
      <SplashPage />
      <SubSection/>
      <Expertise />
      <SubSection/>
      <Background/>
      <SubSection/>
      <Contact/>
      <Footer/>
    </Router>
    
  );
  
}
