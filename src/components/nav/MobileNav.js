import React, { PureComponent } from 'react';
import logo from '../../assets/images/logo.png';
import { FaBars } from 'react-icons/fa';  
import styles from './MobileNav.css';
import createLinks from './createLinks';
import { allLinks } from '../../text/nav';
import { callbackify } from 'util';

export default class MobileNav extends PureComponent{
  state={
    clicked:false
  }
  onClick = ()=>{
    this.setState((state)=>{
      return { clicked:!state.clicked };
    });
  }
  render(){
    const mobileList = createLinks(allLinks);
    return ( 
      <nav className={styles.nav}>
        <section className={styles.navBar}>
          <img src={logo}></img>
          <FaBars onClick={this.onClick} size={32}/>
        </section>
        <section className={styles.navMenu}>
          {this.state.clicked === true ? <ul>{mobileList}</ul> : null}
        </section>
      </nav>
    );
  }
}

