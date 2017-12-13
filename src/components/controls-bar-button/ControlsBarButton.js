import React from 'react';

const ControlsBarButton = ({ children, styleType, onClick }) => (
  <button className={`controls-bar-button button ${styleType}`} onClick={onClick}>
    { children }
  </button>
);

export default ControlsBarButton;
