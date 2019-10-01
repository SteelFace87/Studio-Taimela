import React from 'react';
import styles from './Skills.css';
import MakeSkillList from './MakeSkillList';
import { languageSkills, certificateSkills } from '../../text/background';

export default function Skills() {
  return (
    <section className={styles.skillbackground}>
      <section className={styles.section}>
        <h3>Languages</h3>
        <MakeSkillList skills={languageSkills} />
      </section>
      <section className={styles.section}>
        <h3>Certificates</h3>
        <MakeSkillList skills={certificateSkills} />
      </section>
    </section>
  );
}
