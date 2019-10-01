import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SplashPage from '../splash-page/SplashPage';
import Nav from '../nav/Nav';
import Expertise from '../expertise/Expertise';
import BackgroundPage from '../background-page/BackgroundPage';
import ContactPage from '../contact-page/ContactPage';
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
        <BackgroundPage />
        <ContactPage />
        <Footer />
      </section>
    </Router>
  );
}
