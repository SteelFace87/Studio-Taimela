import React from 'react';
import { shallow } from 'enzyme';
import Background from './Background';

describe('Background component', () => {
  it('renders Background', () => {
    const wrapper = shallow(<Background />);
    expect(wrapper).toMatchSnapshot();
  });
});
