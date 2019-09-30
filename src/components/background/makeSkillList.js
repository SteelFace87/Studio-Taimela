import React from 'react';
import { addBold } from './addBold';
import styles from './MobileBackground.css';

export function makeSkillList(skills) {
  const ul = skills.map((skill, i) => (
    <ul key={i}>
      <li className={styles.check}>✓</li>
      {addBold(skill.text, skill.bold)}
    </ul>
  ));
  return ul;
}
