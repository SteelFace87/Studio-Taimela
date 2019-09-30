import React from 'react';
import { FaLinkedin } from 'react-icons/fa';
import styles from './Background.css';
import { education } from '../../text/background';
import Title from '../title/Title';
import Skills from './Skills';
import ContentDevider from '../content-devider/ContentDevider';

export default function Background() {
  return (
    <>
      <section
        id="Background"
        className={[styles.backgroundPage, 'backgroundPage'].join(' ')}
      >
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
        <section className={styles.social}>
          <p>Find my detailed work experience on LinkedIn</p>
          <a
            alt="Linked In"
            aria-label="Linked In"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/virpinieminen/"
          >
            <FaLinkedin size={42} />
          </a>
        </section>
      </section>
      <ContentDevider />
    </>
  );
}
