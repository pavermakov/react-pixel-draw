import React from 'react';
import PropTypes from 'prop-types';

const ControlsBarButton = ({ children, styleType, onClick }) => (
  <button className={`controls-bar-button button ${styleType}`} onClick={onClick}>
    { children }
  </button>
);

ControlsBarButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  styleType: PropTypes.string,
};

ControlsBarButton.defaultProps = {
  styleType: '',
};

export default ControlsBarButton;
