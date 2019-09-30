import React from 'react';
import styles from './MobileBackground.css';
import { makeSkillList } from './makeSkillList';
import { languageSkills, certificateSkills } from '../../text/background';

export default function Skills() {
  return (
    <section className={styles.background}>
      <section className={styles.section}>
        <h3>Languages</h3>
        {makeSkillList(languageSkills)}
      </section>
      <section className={styles.section}>
        <h3>Certificates</h3>
        {makeSkillList(certificateSkills)}
      </section>
    </section>
  );
}
