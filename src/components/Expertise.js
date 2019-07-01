import React from 'react';
import { expertise } from '../text/expertise';

export default function Expertise(){

  const expertiseList = expertise.map((expertise, i)=>{
    return <li key={i}>{expertise.text}</li>;
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
