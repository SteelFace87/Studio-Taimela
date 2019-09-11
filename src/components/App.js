import './App.css';
import React from 'react';
import SplashPage from './splash-page/SplashPage';
import Nav from './nav/Nav';
import Expertise from './expertise/Expertise';
import Background from './background/Background';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import ContentDevider from './content-devider/ContentDevider';
import Services from './services/Services';
import MobileNavHook from './nav/MobileNavHook';


import {
  BrowserRouter as Router
} from 'react-router-dom';



export default function App() {

  return (
    <Router>
      <>
        <MobileNavHook />
        <Nav />
        <SplashPage />
        <ContentDevider />
        <Expertise />
        <ContentDevider />
        <Services />
        <ContentDevider />
        <Background />
        <ContentDevider />
        <Contact />
        <Footer />
      </>
    </Router>
  );

}
