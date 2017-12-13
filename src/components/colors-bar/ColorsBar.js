import React from 'react';
import ColorsBarColor from 'components/colors-bar-color/ColorsBarColor';
import './ColorsBar.less';

const renderColors = (availableColors, onColorSelect) => {
  return availableColors.map((color, index) => {
    return (
      <ColorsBarColor
        key={`color_${index}`}
        color={color}
        onClick={onColorSelect}
      />
    );
  });
};

const ColorsBar = ({ availableColors, currentColor, onColorSelect }) => (
  <div className="colors-bar">
    <div className="colors-bar__picker">
      { renderColors(availableColors, onColorSelect) }
    </div>

    <div className="colors-bar__selector">
      <span className="colors-bar__header">selected color:</span>

      <div className="colors-bar__row">
        <ColorsBarColor color={currentColor} />
      </div>
    </div>
  </div>
);

export default ColorsBar;
