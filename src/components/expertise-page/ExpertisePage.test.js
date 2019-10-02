import React from 'react';
import { shallow } from 'enzyme';
import ExpertisePage from './ExpertisePage';

describe(`ExpertisePage component`, () => {
  it('renders Expertise', () => {
    const wrapper = shallow(<ExpertisePage />);
    expect(wrapper).toMatchSnapshot();
  });
});
