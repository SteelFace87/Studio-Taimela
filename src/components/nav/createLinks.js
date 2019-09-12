import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

export default function createLinks(links, onClick) {
  return links.map((link, i) => (
    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
    <li onClick={onClick} onKeyDown={onClick} key={i}>
      <Link to={`#${link.title}`}>{link.title}</Link>
    </li>
  ));
}
