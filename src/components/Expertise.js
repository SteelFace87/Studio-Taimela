import React from 'react';
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
      icon: <FaRandom/>
    },
    {
      text:'Extensive experience in international business',
      icon: <FaGlobeAmericas/>
    },
    {
      text:'Ability to translate tech talk into client\'s laungage',
      icon: <FaBookReader/>
    },
    {
      text:'Native in English and finnish',
      icon: <FaRegComments/>
    },
    {
      text:'Copywrite and layout design',
      icon: <FaRegFileAlt/>
    }
  ]
  ;
  

  const expertiseList = expertise.map((expertise, i)=>{
    return <li key={i}>
      <section>
        {expertise.icon}
        {expertise.text}
      </section>
    </li>;
  });

  return (
    <section>
      <h1>Expertise</h1>
      <ul>
        {expertiseList}
      </ul>
    </section>
  );
}
