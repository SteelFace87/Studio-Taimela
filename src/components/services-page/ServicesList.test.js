import React from 'react';
import { shallow } from 'enzyme';
import ServicesList from './ServicesList';

describe('ServicesList component', () => {
  it('renders services list', () => {
    const wrapper = shallow(<ServicesList />);
    expect(wrapper).toMatchSnapshot();
  });
});
