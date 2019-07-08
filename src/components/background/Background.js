import React from 'react';
import styles from './Background.css';
import { education, languages, certificates } from '../../text/background';
import Title from '../title/Title';
import SkillMapper from './SkillMapper';

export default function Background() {

  return (
    <section id='Background' className={[styles.section, 'page'].join(' ')}>
      <section className='content'>
        <section className={styles.background}>
          <Title title='background' />
          <section>
            <ul className={styles.ulEducation}>
              <li>{education.degree}</li>
              <li>{education.school}</li>
            </ul>
          </section>
          <section className={styles.skills}>
            <SkillMapper title={languages.title} skills={languages.skills}/>
            <SkillMapper title={certificates.title} skills={certificates.skills}/>
          </section>
        </section>
      </section>



    </section>
  );
}
