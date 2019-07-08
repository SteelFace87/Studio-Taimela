import React from 'react';
import styles from './Expertise.css';

import {
  FaRandom,
  FaGlobeAmericas,
  FaBookReader,
  FaRegComments,
  FaRegFileAlt
} from 'react-icons/fa';



export default function Expertise() {

  const expertise = [
    {
      text: 'Ability to quickly grasp complex solutions',
      icon: <FaRandom size='3rem' />
    },
    {
      text: 'Extensive experience in international business',
      icon: <FaGlobeAmericas size='3rem' />
    },
    {
      text: 'Ability to translate tech talk into client\'s laungage',
      icon: <FaBookReader size='3rem' />
    },
    {
      text: 'Native in English and finnish',
      icon: <FaRegComments size='3rem' />
    },
    {
      text: 'Copywrite and layout design',
      icon: <FaRegFileAlt size='3rem' />
    }
  ]
    ;


  const expertiseList = expertise.map((expertise, i) => {
    return <li key={i}>
      <section className={styles.li}>
        {expertise.icon}
        <p>
          {expertise.text}
        </p>
      </section>
    </li>;
  });

  return (
    <section id='Expertise' className={styles.container}>
      <h1 className={styles.h1}>EXPERTISE</h1>
      <section className={styles.content}>
        <ul className={styles.ul}>
          {expertiseList}
        </ul>
      </section>
    </section>
  );
}
