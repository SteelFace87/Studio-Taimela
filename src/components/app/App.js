import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import SplashPage from '../splash-page/SplashPage';
import ExpertisePage from '../expertise-page/ExpertisePage';
import BackgroundPage from '../background-page/BackgroundPage';
import ContactPage from '../contact-page/ContactPage';
import Footer from '../footer/Footer';
import ServicesPage from '../services-page/ServicesPage';
import Nav from '../nav/Nav';

export default function App() {
  return (
    <Router>
      <section className="container">
        <Nav />
        <SplashPage />
        <ExpertisePage />
        <ServicesPage />
        <BackgroundPage />
        <ContactPage />
        <Footer />
      </section>
    </Router>
  );
}
