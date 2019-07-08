import './App.css';
import React from 'react';
import SplashPage from './splash-page/SplashPage';
import Nav from './nav/Nav';
import Expertise from './expertise/Expertise';
import Background from './background/Background';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import SubSection from './SubSection';
import Services from './services/Services';
import MobileNav from './nav/MobileNav';


import {
  BrowserRouter as Router
} from 'react-router-dom';



export default function App() {

  return (
    <Router>
      <MobileNav/>
      <Nav />
      
      <div style={{ heigth:'100px', width:'100px', backgroundColor:'green', position:'fixed', opacity:'.3' }}>


      </div>
     
      <SplashPage />
      <SubSection/>
      <Expertise />
      <SubSection/>
      <Services/>
      <SubSection/>
      <Background/>
      <SubSection/>
      <Contact/>
      <Footer/>
    
    </Router>
     
      
    
  );
  
}
