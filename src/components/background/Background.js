import React from 'react';
import styles from './Background.css';
import { education, languages, certificates } from '../../text/background';
import Title from '../title/Title';
import SkillMapper from './SkillMapper';
import { FaLinkedin } from 'react-icons/fa';

export default function Background() {

  return (
    <section id='Background' className={[styles.backgroundPage, 'backgroundPage'].join(' ')}>
    
      <section className={styles.background}>
        <Title title='background' />

        <section className={styles.backgroundText}>
          <section>
            <ul className={styles.ulEducation}>
              <li>{education.degree}</li>
              <li>{education.school}</li>
            </ul>
          </section>
          <section className={styles.skills}>
            <SkillMapper title={languages.title} skills={languages.skills} />
            <SkillMapper title={certificates.title} skills={certificates.skills} />
          </section>
        </section>

      </section>
      <section className={styles.social}>
        <p>
            Find my detailed work experience on LinkedIn
        </p>
        <a alt="Linked In" aria-label= "Linked In" rel= "noopener noreferrer" target = '_blank' href='https://www.linkedin.com/in/virpinieminen/'>
          <FaLinkedin size={42} />
        </a>
      </section>



    </section>
  );
}
