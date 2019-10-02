import React from 'react';
import PropTypes from 'prop-types';
import styles from './RenderParagraph.css';

export default function RenderParagraph({ content }) {
  return <p className={styles.paragraph}>{content}</p>;
}

RenderParagraph.propTypes = {
  content: PropTypes.string,
};
