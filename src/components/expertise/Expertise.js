import React from 'react';
import styles from './Expertise.css';
import Title from '../title/Title';

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
      icon: <FaRandom size={48} />
    },
    {
      text: 'Extensive experience in international business',
      icon: <FaGlobeAmericas size={48} />
    },
    {
      text: 'Ability to translate tech talk into client\'s laungage',
      icon: <FaBookReader size={48} />
    },
    {
      text: 'Native in English and Finnish',
      icon: <FaRegComments size={48} />
    },
    {
      text: 'Copywrite and layout design',
      icon: <FaRegFileAlt size={48} />
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
    <section id='Expertise' className={[styles.expertisePage, 'expertisePage'].join(' ')}>
      <section className={styles.content}>
        <Title title='Expertise'/>
        <ul className={styles.ul}>
          {expertiseList}
        </ul>
      </section>
    </section>
  );
}
