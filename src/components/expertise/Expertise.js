import React from 'react';
import {
  FaRandom,
  FaGlobeAmericas,
  FaComments,
  FaFileAlt,
  FaStar,
} from 'react-icons/fa';
import styles from './Expertise.css';
import Title from '../title/Title';
import ContentDevider from '../content-devider/ContentDevider';

export default function Expertise() {
  const expertise = [
    {
      text: ['Able to quickly', 'grasp complex,', 'technical', 'solutions'],
      icon: <FaRandom size={36} />,
    },
    {
      text: ['Extensive', 'experience in', 'international', 'business'],
      icon: <FaGlobeAmericas size={36} />,
    },
    {
      text: ['Translate', 'tech talk into', 'non-technical', 'language'],
      icon: <FaComments size={36} />,
    },
    {
      text: ['Can see past', 'complexity to', 'bring out the', 'best'],
      icon: <FaStar size={36} />,
    },
    {
      text: ['Both', 'copywriting', 'and layout', 'design'],
      icon: <FaFileAlt size={36} />,
    },
  ];

  const expertiseList = expertise.map((expertiseItem, i) => (
    <li key={i}>
      <section className={styles.li}>
        {expertiseItem.icon}
        <ul className={styles.iconUl}>
          {expertiseItem.text.map((text, textIndex) => (
            <li key={textIndex}>{text}</li>
          ))}
        </ul>
      </section>
    </li>
  ));

  return (
    <>
      <section className={[styles.expertisePage, 'expertisePage'].join(' ')}>
        <Title title="Expertise" />
        <ul className={styles.ul}>{expertiseList}</ul>
      </section>
      <ContentDevider />
    </>
  );
}
