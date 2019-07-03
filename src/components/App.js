import './App.css';
import React from 'react';
import SplashPage from './SplashPage';
import Nav from './Nav';
import Expertise from './Expertise';
import Background from './Background';
import Contact from './Contact';
import Footer from './Footer';
import SubSection from './SubSection';

export default function App() {

  return (
    <>
      <Nav />
      <SplashPage />
      <SubSection/>
      <Expertise />
      <SubSection/>
      <Background/>
      <SubSection/>
      <Contact/>
      <Footer/>
    </>
  );
  
}
