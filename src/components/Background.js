import React from 'react';
import styles from './Background.css';
import { background } from '../text/background';

export default function Background(){
  const backgroundItems = background.map((background, i)=>{

    return <li className={styles.li} key={i}><p>{background}</p></li>;
  });
  return (
    <section className={styles.section}>
      <h1>Background</h1>
      <ul className = {styles.ul}>
        {backgroundItems}
      </ul>

    </section>
  );
}
