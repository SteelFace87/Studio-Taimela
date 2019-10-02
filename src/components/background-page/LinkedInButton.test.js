import React from 'react';
import { shallow } from 'enzyme';
import LinkedInButton from './LinkedInButton';

describe('LinkedInButton', () => {
  it('renders LinkedInButton', () => {
    const wrapper = shallow(<LinkedInButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
