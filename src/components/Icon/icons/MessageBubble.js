import React from 'react';
import PropTypes from 'prop-types';
import iconColorsMap from './colors';

const MessageBubble = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    {...props}
  >
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
  </svg>
);
MessageBubble.propTypes = { fill: PropTypes.string };
MessageBubble.defaultProps = { fill: iconColorsMap.mainicon };

export default MessageBubble;
