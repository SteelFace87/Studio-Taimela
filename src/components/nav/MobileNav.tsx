import createLinks from './createLinks.js';
import { allLinks } from '../../text/nav.js';
import * as React from 'react';

const FunctionComponent: React.FC = () => {
  const [navState, setNavState] = React.useState( {
    display:false
  }) 
  const updateClick = ()=>{
    setNavState({display:!navState.display});
  };

  const mobileList = createLinks(allLinks, updateClick);

  return(<h1>hi</h1>)
}

export default FunctionComponent;