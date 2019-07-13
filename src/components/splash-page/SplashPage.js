import React from 'react';
import styles from './SplashPage.css';

import { intro, bullets } from '../../text/splashPage';


export default function SplahPage() {

  const listItems = bullets.map((bullet, i) => <li key={i}>{bullet}</li>);

  return (
    <section className={[styles.splashPage, 'splashPage'].join(' ')} >
      <section className={styles.text}>
        <ul className={styles.list}>{listItems}</ul>
        <p className={styles.intro}>{intro}</p>
        <p className={styles.name}>Virpi Nieminen</p>
      </section>
     
      <section className={styles.img}/>    
      
    </section>
  );
}
