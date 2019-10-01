import React from 'react';
import { shallow } from 'enzyme';
import MakeSkillList from './MakeSkillList';
import { languageSkills } from '../../text/background';

describe('MakeSkillList comonent', () => {
  it('renders a skill list', () => {
    const wrapper = shallow(<MakeSkillList skills={languageSkills} />);
    expect(wrapper).toMatchSnapshot();
  });
});
