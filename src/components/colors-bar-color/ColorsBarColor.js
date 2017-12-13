import React from 'react';
import './ColorsBarColor.less';

const ColorsBarColor = ({ color, onClick }) => (
  <span className="colors-bar-color border" style={{ 'backgroundColor': color }} onClick={onClick}></span>
);

export default ColorsBarColor;
