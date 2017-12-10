import React from 'react';
import ColorsBarColor from 'components/colors-bar-color/ColorsBarColor';
import './ColorsBar.less';

const colors = [
  'crimson',
  'lightsalmon',
  'gold',
  'lawngreen',
  'lightskyblue',
  'royalblue',
  'rebeccapurple',
  'black',
  'aquamarine',
  'white',
];

const selectedColor = 'white';

const pickerStyles = {
  'gridTemplateRows': `repeat(${Math.ceil(colors.length / 2)}, 1fr)`,
};

const renderColor = (color, index) => <ColorsBarColor key={`color_${index}`} color={color} />;

const ColorsBar = () => (
  <div className="colors-bar">
    <div className="colors-bar__picker" style={pickerStyles}>
      { colors.map(renderColor) }
    </div>

    <div className="colors-bar__selector">
      <span className="colors-bar__header">selected color:</span>

      <div className="colors-bar__row">
        <span className="colors-bar__selected-color">
          <ColorsBarColor color={selectedColor} />
        </span>
      </div>
    </div>
  </div>
);

export default ColorsBar;
