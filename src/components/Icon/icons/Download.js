import React from 'react';
import PropTypes from 'prop-types';
import iconColorsMap from './colors';

const Download = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    {...props}
  >
    <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z" />
  </svg>
);
Download.propTypes = { fill: PropTypes.string };
Download.defaultProps = { fill: iconColorsMap.mainicon };

export default Download;
