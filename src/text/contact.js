import React from 'react';
import { FaEnvelopeOpenText, FaMapMarked, FaPhone } from 'react-icons/fa';

export const about = `When I’m not at my desk, you can find me traveling or enjoying the outdoors. I’m also an
avid painter, a mother and a lifelong learner. I love discovering cultures, places and people,
and I’ve lived in five different countries with Zürich, Switzerland, my current home. `;

export const contactOptions = [
  {
    icon: <FaEnvelopeOpenText size={32} />,
    text: 'Virpi@studiotaimela.com',
  },
  {
    icon: <FaMapMarked size={32} />,
    text: (
      <>
        <span>Zürich</span>
        <span>Switzerland</span>
      </>
    ),
  },
  {
    icon: <FaPhone size={32} />,
    text: (
      <>
        <span>+41 77 979 9734</span>
        <span> +358 40 410 6428</span>
      </>
    ),
  },
];
