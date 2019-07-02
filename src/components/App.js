import './App.css';
import React from 'react';
import SplashPage from './SplashPage';
import Nav from './Nav';
import Expertise from './Expertise';
import Background from './Background';
import Contact from './Contact';
import SubSection from './SubSection';
import Footer from './Footer';

export default function App() {

  return (
    <>
      <Nav />
      <SplashPage />
      <SubSection title='Expertise'/>
      <Expertise />
      <SubSection title='Background'/>
      <Background/>
      <SubSection title='Contact'/>
      <Contact/>
      <Footer/>
    </>
  );
}
