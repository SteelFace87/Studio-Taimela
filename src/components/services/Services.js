import React from 'react';
import { services, aboutMe } from '../../text/services';
import styles from './Services.css';
import Title from '../title/Title';


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
    <main id='Services' className={[styles.section, 'page'].join(' ')}>
      <section className='content'>
        <Title title='services' />
        <ul className={styles.servicesList}>
          {servicesList}
        </ul>
        <p className={styles.aboutMe}>{aboutMe}</p>
      </section>
    </main>
  );

}
