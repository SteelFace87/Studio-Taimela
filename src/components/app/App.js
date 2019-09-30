import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SplashPage from '../splash-page/SplashPage';
import Nav from '../nav/Nav';
import Expertise from '../expertise/Expertise';
import Background from '../background/Background';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';
import Services from '../services/Services';
import MobileNavHook from '../nav/MobileNavHook';

export default function App() {
  return (
    <Router>
      <section className="container">
        <MobileNavHook />
        <Nav />
        <SplashPage />
        <Expertise />
        <Services />
        <Background />
        <Contact />
        <Footer />
      </section>
    </Router>
  );
}
