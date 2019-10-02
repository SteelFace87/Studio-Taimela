import React from 'react';
import { shallow } from 'enzyme';
import AboutVirpi from './AboutVirpi';

describe('AboutVirpi component', () => {
  it('renders a summary of Virpi', () => {
    const wrapper = shallow(<AboutVirpi />);
    expect(wrapper).toMatchSnapshot();
  });
});
