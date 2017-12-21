import React from 'react';
import PropTypes from 'prop-types';
import './IntroButton.less';

const IntroButton = ({ children, isGridSelected, onClick }) => (
  <button
    className={`intro-button ${!isGridSelected && 'intro-button_disabled'} border`}
    onClick={onClick}
  >
    { children }
  </button>
);

IntroButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  isGridSelected: PropTypes.bool,
};

IntroButton.defaultProps = {
  isGridSelected: false,
};

export default IntroButton;
