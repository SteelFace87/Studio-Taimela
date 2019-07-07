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
import { FaRegBell } from 'react-icons/fa';


export default function App() {

  return (
    <Router>
    
      <Nav />
      
      <div style={{ heigth:'100px', width:'100px', backgroundColor:'green', position:'fixed', opacity:'.3' }}>


      </div>
     
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
