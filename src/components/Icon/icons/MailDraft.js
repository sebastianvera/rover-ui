import React from 'react';
import PropTypes from 'prop-types';
import iconColorsMap from './colors';

const MailDraft = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill={fill}
    {...props}
  >
    <path d="M21.99 8c0-.72-.37-1.35-.94-1.7L12 1 2.95 6.3C2.38 6.65 2 7.28 2 8v10c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2l-.01-10zM12 13L3.74 7.84 12 3l8.26 4.84L12 13z" />
  </svg>
);
MailDraft.propTypes = { fill: PropTypes.string };
MailDraft.defaultProps = { fill: iconColorsMap.mainicon };

export default MailDraft;
