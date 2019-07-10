import React from 'react';
import styles from './SplashPage.css';

import { intro, bullets } from '../../text/splashPage';


export default function SplahPage(){

  const listItems = bullets.map((bullet, i)=><li key={i}>{bullet}</li>); 

  return (
    <section className={[styles.section, 'page'].join(' ')}>

      <aside className={styles.intro}>
        <section className={styles.details}>
          <ul className={styles.list}>{listItems}</ul>
          <p>{intro}</p>
        </section>
      </aside>
  
      <section className={styles.imgContainer}/>
  
    </section>
  );
}
