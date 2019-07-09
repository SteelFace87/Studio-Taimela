import React, { PureComponent } from 'react';
import logo from '../../assets/images/logo.png';
import { FaBars } from 'react-icons/fa';
import styles from './MobileNav.css';
import createLinks from './createLinks';
import { allLinks } from '../../text/nav';


export default class MobileNav extends PureComponent {
  state = {
    clicked: false
  }
  onClick = () => {
    this.setState((state) => {
      return { clicked: !state.clicked };
    });
  }
  render() {
    const mobileList = createLinks(allLinks, this.onClick);
    return (
      <>
        <nav className={styles.nav}>
          <section className={styles.navBar}>
            <img alt='logo' src={logo}></img>
            <FaBars onClick={this.onClick} size={32} />
          </section>
        </nav>
        <section className={[styles.navMenu, this.state.clicked].join(' ')}>
          {this.state.clicked === true ? <ul>{mobileList}</ul> : null}
        </section>
      </>
    );
  }
}

