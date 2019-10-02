import { shallow } from 'enzyme';
import React from 'react';
import ContactOptions from './ContactOptions';

describe('ContactOption component', () => {
  it('renders a list of contact options from an array', () => {
    const wrapper = shallow(<ContactOptions />);
    expect(wrapper).toMatchSnapshot();
  });
});
