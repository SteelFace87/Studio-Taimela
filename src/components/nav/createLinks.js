import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function createLinks(links){

  return links.map((link, i)=>{
    return <li key={i}><Link to={`#${link.title}`}>{link.title}</Link></li>;
  });


}


