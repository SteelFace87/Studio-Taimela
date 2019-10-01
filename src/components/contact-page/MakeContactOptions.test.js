import { shallow } from 'enzyme';
import React from 'react';
import MakeContactOptions from './MakeContactOptions';

describe('ContactOption component', () => {
  it('renders a list of contact options from an array', () => {
    const contactOptionsArray = [
      {
        icon: 'fake icon',
        text: 'Virpi@studiotaimela.com',
      },
      {
        icon: 'fake icon2',
        text: (
          <>
            <span>Zürich</span>
            <span>Switzerland</span>
          </>
        ),
      },
      {
        icon: `fake icon3`,
        text: (
          <>
            <span>+41 77 979 9734</span>
            <span> +358 40 410 6428</span>
          </>
        ),
      },
    ];

    const wrapper = shallow(
      <MakeContactOptions contactOptions={contactOptionsArray} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
