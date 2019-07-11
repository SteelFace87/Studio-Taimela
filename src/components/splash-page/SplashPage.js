import React from 'react';
import styles from './SplashPage.css';

import { intro, bullets } from '../../text/splashPage';


export default function SplahPage() {

  const listItems = bullets.map((bullet, i) => <li key={i}>{bullet}</li>);

  return (
    <section className={[styles.splashPage, 'splashPage'].join(' ')} >
      <section className={[styles.intro, 'intro'].join(' ')}>
        <ul className={styles.list}>{listItems}</ul>
      </section>
      <section className={[styles.imgContainer, 'imgContainer'].join(' ')}>
        <section className={styles.textContainer}>
          <p>{intro}</p>
        </section>
        <section className={styles.img}/>    
      </section>
    </section>
  );
}
