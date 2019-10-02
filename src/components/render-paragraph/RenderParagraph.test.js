import React from 'react';
import { shallow } from 'enzyme';
import RenderParagraph from './RenderPagragraph';

describe('RenderParagraph component', () => {
  it('renders a paragraph from a string', () => {
    const sampleString = 'render me please';
    const wrapper = shallow(<RenderParagraph content={sampleString} />);
    expect(wrapper).toMatchSnapshot();
  });
});
