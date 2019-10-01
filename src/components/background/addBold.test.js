import React from 'react';

import { addBold } from './addBold';

describe('Test addBold function', () => {
  it('adds h4 to words that are bold, and p tags to words that are not', () => {
    const string = 'bold first word';
    const withBold = addBold(string, [0]);
    expect(withBold).toEqual([
      <li key={0}>
        <h4>bold</h4>
      </li>,
      <li key={1}>
        <p>first</p>
      </li>,
      <li key={2}>
        <p>word</p>
      </li>,
    ]);
  });
});
