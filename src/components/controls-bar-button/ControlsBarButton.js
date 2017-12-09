import React from 'react';

const ControlsBarButton = ({ children, styleType }) => (
  <button className={`controls-bar-button button ${styleType}`}>
    { children }
  </button>
);

export default ControlsBarButton;
