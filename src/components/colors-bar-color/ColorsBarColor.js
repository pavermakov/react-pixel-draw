import React from 'react';
import './ColorsBarColor.less';

const ColorsBarColor = ({ color }) => (
  <span className="colors-bar-color border" style={{ 'backgroundColor': color }}></span>
);

export default ColorsBarColor;
