import React from 'react';

export function addBold(string, index) {
  const array = string.split(' ');
  let withBoldArray = [];

  withBoldArray = array.map((word, wordIndex) => {
    if (index.includes(wordIndex)) {
      return (
        <li key={wordIndex}>
          <h4>{word}</h4>
        </li>
      );
    }
    return (
      <li key={wordIndex}>
        <p>{word}</p>
      </li>
    );
  });
  return withBoldArray;
}
