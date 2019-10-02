import React from 'react';
import { shallow } from 'enzyme';
import ExpertiseList from './ExpertiseList';

describe('ExpertiseList Component', () => {
  it('renders expertise list', () => {
    const wrapper = shallow(<ExpertiseList />);
    expect(wrapper).toMatchSnapshot();
  });
});
