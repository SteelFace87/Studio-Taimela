import React from 'react';

export function lineMapper(array, tag) {
  let list;
  if (tag === 'p') {
    list = array.map((line, i) => (
      <li key={i}>
        <p>{line}</p>
      </li>
    ));
  } else {
    list = array.map((line, i) => <li key={i}>{line}</li>);
  }
  return list;
}
