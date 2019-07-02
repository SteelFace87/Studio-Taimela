import React from 'react';
import styles from './SplashPage.css';

import { intro, bullets } from '../text/splashPage';
import { FaCheck } from 'react-icons/fa';
import profile from '../assets/images/profile.png';



export default function SplahPage(){

  const listItems = bullets.map((bullet, i)=><li key={i}><FaCheck/> {bullet}</li>); 

  return (
    <section className={styles.splash}>

      <aside className={styles.intro}>
        <section className={styles.details}>
          <p>{intro}</p>
          <ul className={styles.list}>{listItems}</ul>
        </section>
      </aside>

      <aside className={styles.imgContainer}>
        <img className={styles.img} src={profile}/>
      </aside>

    </section>
  );
}
