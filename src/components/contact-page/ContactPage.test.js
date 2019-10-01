import React from 'react';
import { shallow } from 'enzyme';
import ContactPage from './ContactPage';

describe('ContactPage component', () => {
  it('renders ContactPage', () => {
    const wrapper = shallow(<ContactPage />);
    expect(wrapper).toMatchSnapshot();
  });
});
