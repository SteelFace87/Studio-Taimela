import React from 'react';
import { shallow } from 'enzyme';
import MobileNav from './DesktopNav';

describe('MobileNav Component', () => {
  it('renders mobile nav', () => {
    const wrapper = shallow(<MobileNav />);
    expect(wrapper).toMatchSnapshot();
  });
});
