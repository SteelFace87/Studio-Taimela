import React from 'react';
import styles from './Expertise.css';
import Title from '../title/Title';

import {
  FaRandom,
  FaGlobeAmericas,
  FaBookReader,
  FaRegFileAlt,
  FaRegStar
} from 'react-icons/fa';

export default function Expertise() {

  const expertise = [
    {
      text: 'Ability to quickly grasp complex, technical solutions',
      icon: <FaRandom size={48} />
    },
    {
      text: 'Extensive experience in international business',
      icon: <FaGlobeAmericas size={48} />
    },
    {
      text: 'Can translate tech talk into non technical language',
      icon: <FaBookReader size={48} />
    },
    {
      text: 'Able to see past complexity to bring out the best',
      icon: <FaRegStar size={48} />
    },
    {
      text: 'Copywrite and layout design',
      icon: <FaRegFileAlt size={48} />
    }
  ];

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
      <Title title='Expertise'/>

      <ul className={styles.ul}>
        {expertiseList}
      </ul>

    </section>
  );
}
