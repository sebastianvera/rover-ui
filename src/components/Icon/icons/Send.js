import React from 'react';
import PropTypes from 'prop-types';
import iconColorsMap from './colors';

const Send = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    {...props}
  >
    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
  </svg>
);
Send.propTypes = { fill: PropTypes.string };
Send.defaultProps = { fill: iconColorsMap.mainicon };

export default Send;
