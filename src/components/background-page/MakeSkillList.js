import React from 'react';
import MakeSkill from './MakeSkill';

export default function MakeSkillList({ skills }) {
  const skillList = skills.map((skill, i) => (
    <ul key={i}>
      <MakeSkill skill={skill} />
    </ul>
  ));
  return skillList;
}
