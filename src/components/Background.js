import React from 'react';
import styles from './Background.css';
import { background } from '../text/background';

export default function Background(){
  const backgroundItems = background.map((background, i)=>{

    return <li className={styles.li} key={i}><p>{background}</p></li>;
  });
  return (
    <section id='Background' className={styles.section}>
      <section className={styles.content}>
        <section className={styles.content}>
          <h1>Background</h1>
          <ul className = {styles.ul}>
            {backgroundItems}
          </ul>
        </section>

      </section>

    </section>
  );
}
