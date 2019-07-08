import React from 'react';
import { leftLinks, rightLinks } from '../../text/nav';
import styles from './Nav.css';
import logo from '../../assets/images/logo.png';  
import createLinks from './createLinks';




export default function Nav(){
  const leftNavLinks = <ul className={styles.hover}>{createLinks(leftLinks)}</ul>;
  const rightNavLinks = <ul>{createLinks(rightLinks)}</ul>;
  return (
  
    <nav className={styles.nav}>
      <section className={styles.leftLinkContainer}>
        {leftNavLinks}
      </section>
      <section className={styles.logoContainer}>
        <img src={logo}/>
      </section>
      <section className={styles.rightLinkContainer}>
        {rightNavLinks}
      </section>
    </nav>
 
  );
}
