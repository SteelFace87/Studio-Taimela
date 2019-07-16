import React from 'react';
import styles from './Expertise.css';
import Title from '../title/Title';

import {
  FaRandom,
  FaGlobeAmericas,
  FaBook,
  FaRegFileAlt,
  FaRegStar,
} from 'react-icons/fa';


export default function Expertise() {

  const expertise = [
    {
      text: ['Able to quickly', 'grasp complex,', 'technical', 'solutions'],
      icon: <FaRandom size={36} />
    },
    {
      text: ['Extensive', 'experience in', 'international', 'business'],
      icon: <FaGlobeAmericas size={36} />
    },
    {
      text: ['Able to translate', 'tech talk into', 'non-technical', 'language'],
      icon: <FaBook size={36} />
    },
    {
      text: ['Can see past', 'complexity to', 'bring out the', 'best'],
      icon: <FaRegStar size={36} />
    },
    {
      text: ['Both', 'copywriting', 'and layout', 'design'],
      icon: <FaRegFileAlt size={36} />
    }
  ];

  const expertiseList = expertise.map((expertise, i) => {
    return <li key={i}>
      <section className={styles.li}>
        {expertise.icon}
        <ul className={styles.iconUl}>
          {expertise.text.map((text, i)=><li key={i}>{text}</li>)}
        </ul>
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
