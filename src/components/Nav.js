import React from 'react';
import { links } from '../text/nav';
import styles from './Nav.css';
import logo from '../assets/images/logo.png';

export default function Nav(){
  const navItems = links.map((link, i)=>{
    return <li key={i}><a>{link.title}</a></li>;
  });
  return (
  
    <nav className={styles.nav}>
      <section className={styles.logoContainer}> 
        <img src={logo}/>
      </section>
      <section className={styles.linkContainer}>
        <ul className={styles.navLinks}>
          {navItems}
        </ul>
      </section>
      <section>
      </section>
    </nav>
    

  );
}
