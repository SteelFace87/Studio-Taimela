import React from 'react';
import { shallow } from 'enzyme';
import MakeSkill from './MakeSkill';
import { languageSkills } from '../../text/background';

describe('MakeSkill component', () => {
  it('renders a skill', () => {
    const languageSkill = languageSkills[0];
    const wrapper = shallow(<MakeSkill skill={languageSkill} />);
    expect(wrapper).toMatchSnapshot();
  });
});
