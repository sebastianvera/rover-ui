import React from 'react';
import PropTypes from 'prop-types';
import iconColorsMap from './colors';

const MentionGroup = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    {...props}
  >
    <path d="M1 5h2v14H1V5zm4 0h2v14H5V5zm17 0H10c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6c0-.55-.45-1-1-1zM11 15h5v2h-5v-2zm0-4h10v2H11v-2zm0-4h10v2H11V7z" />
  </svg>
);
MentionGroup.propTypes = { fill: PropTypes.string };
MentionGroup.defaultProps = { fill: iconColorsMap.mainicon };

export default MentionGroup;
