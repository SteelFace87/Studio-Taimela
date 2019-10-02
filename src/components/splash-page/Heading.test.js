import React from 'react';
import { shallow } from 'enzyme';
import Heading from './Heading';

describe('Heading component', () => {
  it('renders ContactPage', () => {
    const wrapper = shallow(<Heading />);
    expect(wrapper).toMatchSnapshot();
  });
});
