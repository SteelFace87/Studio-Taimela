import React, { PureComponent } from 'react';
import logo from '../../assets/images/logo.png';
import { FaBars } from 'react-icons/fa';  
import styles from './MobileNav.css';

export default class MobileNav extends PureComponent{
  state={
    clicked:false
  }
  render(){
    const mobileList = <li>hi</li>;
    return ( 
      <nav className={styles.nav}>
        <section className={styles.navBar}>
          <img src={logo}></img>
          <FaBars size='2rem'/>
        </section>
        {this.state.clicked === true ? <ul>{mobileList}</ul> : null}
      </nav>
    );
  }
}

