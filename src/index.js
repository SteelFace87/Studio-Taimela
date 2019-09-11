import React from 'react';
import { render } from 'react-dom';
import WebFont from 'webfontloader';
import App from './components/App';

WebFont.load({
  google: {
    families: ['Roboto:300,700'],
  },
});

render(<App />, document.getElementById('root'));
