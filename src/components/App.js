import './App.css';
import React from 'react';
import SplashPage from './SplashPage';
import Nav from './Nav';
import Expertise from './Expertise';
import Background from './Background';

export default function App() {

  return (
    <>
      <Nav />
      <SplashPage />
      <Expertise/>
      <Background/>
    </>
  );
}
