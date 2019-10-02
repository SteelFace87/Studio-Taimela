import React from 'react';
import { shallow } from 'enzyme';
import Intro from './Intro';

describe('Intro component', () => {
  it('renders introducion', () => {
    const wrapper = shallow(<Intro />);
    expect(wrapper).toMatchSnapshot();
  });
});
