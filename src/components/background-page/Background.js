import React from 'react';
import Title from '../title/Title';
import Skills from './Skills';
import styles from './Background.css';
import { education } from '../../text/background';

export default function Background() {
  return (
    <section className={styles.background}>
      <Title title="background" />
      <section className={styles.backgroundText}>
        <section>
          <ul className={styles.ulEducation}>
            <li>{education.degree}</li>
            <li>{education.school}</li>
          </ul>
        </section>
        <section className={styles.skills}>
          <Skills />
        </section>
      </section>
    </section>
  );
}
