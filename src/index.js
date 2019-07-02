import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import WebFont from 'webfontloader';

WebFont.load({
  google:{
    families:['Roboto']
  }
});

render(
  <App />,
  document.getElementById('root')
);
