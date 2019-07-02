import React from 'react';
import styles from './Expertise.css';
import { 
  FaRandom,
  FaGlobeAmericas,
  FaBookReader,
  FaRegComments,
  FaRegFileAlt
} from 'react-icons/fa';



export default function Expertise(){

  const expertise = [
    {
      text:'Ability to quickly grasp complex solutions',
      icon: <FaRandom size='2rem'/>
    },
    {
      text:'Extensive experience in international business',
      icon: <FaGlobeAmericas size='2rem'/>
    },
    {
      text:'Ability to translate tech talk into client\'s laungage',
      icon: <FaBookReader size='2rem'/>
    },
    {
      text:'Native in English and finnish',
      icon: <FaRegComments size='2rem'/>
    },
    {
      text:'Copywrite and layout design',
      icon: <FaRegFileAlt size='2rem'/>
    }
  ]
  ;
  

  const expertiseList = expertise.map((expertise, i)=>{
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
    <section className={styles.container}>
      <h1>Expertise</h1>
      <ul className={styles.ul}>
        {expertiseList}
      </ul>
    </section>
  );
}
