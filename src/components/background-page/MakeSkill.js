import React from 'react';
import styles from './makeSkill.css';

export default function MakeSkill({ skill }) {
  const { text, bold } = skill;
  const splitString = text.split(' ');
  const skillWithStyle = splitString.map((word, index) => {
    if (bold.includes(index)) {
      return (
        <li key={index}>
          <h4>{word}</h4>
        </li>
      );
    }
    return (
      <li key={index}>
        <p>{word}</p>
      </li>
    );
  });
  return [
    <li key="check" className={styles.check}>
      ✓
    </li>,
    ...skillWithStyle,
  ];
}
