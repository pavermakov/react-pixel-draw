import React from 'react';
import './IntroButton.less';

const IntroButton = ({ children, isGridSelected, onClick }) => (
  <button
    className={`intro-button ${!isGridSelected && 'intro-button_disabled'} border`}
    onClick={onClick}
  >
    { children }
  </button>
);

export default IntroButton;
