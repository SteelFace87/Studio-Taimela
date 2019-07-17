import React from 'react';
import styles from './SplashPage.css';

import { bullets } from '../../text/splashPage';


export default function SplahPage() {

  const listItems = bullets.map((bullet, i) => <li key={i}>{bullet}</li>);

  return (
    <section id="Splashpage" className={[styles.splashPage, 'splashPage'].join(' ')} >
      <section className={styles.text}>
        <ul className={styles.titles}>{listItems}</ul>
        <ul className={[styles.about, 'about'].join(' ')}>
          <li><p>I help tech companies with</p></li>
          <li><p>complex solutions to bring</p></li>
          <li><p>out their best</p></li>
          <li><p>Virpi Taimela</p></li>
        </ul>
      </section>
     
      <section className={styles.img}/>    
      
    </section>
  );
}
