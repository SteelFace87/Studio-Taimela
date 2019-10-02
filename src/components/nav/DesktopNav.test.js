import React from 'react';
import { shallow } from 'enzyme';
import DesktopNav from './DesktopNav';

describe('DesktopNav Component', () => {
  it('renders desktop nav', () => {
    const wrapper = shallow(<DesktopNav />);
    expect(wrapper).toMatchSnapshot();
  });
});
