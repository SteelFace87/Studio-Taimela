import React from 'react';
import { services, aboutMe } from '../../text/services';
import styles from './Services.css';


export default function Services() {
  const servicesList = services.map((content, i) => {
    return <li className={styles.li} key={i}>
      <>
        <h2>{content.title}</h2>
        <p className={styles.devider}>~</p>
        <p>{content.content}</p>
      </>
    </li>;
  });
  return (
    <main id='Services' className={styles.main}>
      <h1>SERVICES</h1>
      <ul className={styles.servicesList}>
        {servicesList}
      </ul>
      <p className={styles.aboutMe}>{aboutMe}</p>
    </main>
  );

}
