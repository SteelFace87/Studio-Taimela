import React from 'react';
import styles from './Background.css';
import { background } from '../../text/background';
import Title from '../title/Title';

export default function Background() {
  const backgroundItems = background.map((background, i) => {

    return <li className={styles.li} key={i}><p>{background}</p></li>;
  });
  return (
    <section id='Background' className={styles.section}>
      <Title title='background' />
      <section className='content'>
        <ul className={styles.ul}>
          {backgroundItems}
        </ul>
      </section>



    </section>
  );
}
