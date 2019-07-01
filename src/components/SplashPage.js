import React from 'react';
import styles from './SplashPage.css';

import { intro, bullets } from '../text/splashPage';



export default function SplahPage(){

  const listItems = bullets.map((bullet, i)=><li key={i}>{bullet}</li>); 

  return (
    <section className={styles.splash}>
      <aside>
        <p>
          {intro}
        </p>
        <ul>
          {listItems}
        </ul>
      </aside>
      <aside>
        images
      </aside>
    </section>
  );
}
