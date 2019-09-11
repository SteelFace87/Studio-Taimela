import React from 'react';
import PropTypes from 'prop-types';
import styles from './SkillMapper.css';

export default function SkillMapper({ title, skills }) {
  const skillList = skills.map((skillArray, i) => (
    <li className={styles.skill} key={i}>
      <p className={styles.symbol}>✔ </p>
      {skillArray.map(skillObject => {
        console.log('skill array', skillObject);
        return (
          <>
            {skillObject.content.map(skill => (
              <p className={styles.skillText} key={i}>
                {skill}
              </p>
            ))}
          </>
        );
      })}
    </li>
  ));
  return (
    <section className={styles.skillContainer}>
      <h2>{title}</h2>
      <ul>{skillList}</ul>
    </section>
  );
}

SkillMapper.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.array.isRequired,
};
