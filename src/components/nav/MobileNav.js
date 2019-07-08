import React from 'react';
import logo from '../../assets/images/logo.png';
import { FaBars } from 'react-icons/fa';  
import styles from './MobileNav.css';

export default function MobileNav() {
  return (
    <nav className={styles.nav}>
      <section className={styles.navBar}>
        <img src={logo}></img>
        <FaBars size='2rem'/>
      </section>
     
    </nav>
  );
}
