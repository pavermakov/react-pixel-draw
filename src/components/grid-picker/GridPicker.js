import React from 'react';
import './GridPicker.less';

const renderGridOptions = (gridOptions, onGridSelect) => {
  return gridOptions.map((option, index) => {
    return (
      <div
        className={`grid-picker__item border border-${index} ${option.isSelected && 'border-success text-success'}`}
        data-grid-type={option.type}
        key={`grid_option_${index}`}
        onClick={onGridSelect}
      >
        <div className="grid-picker__content">
          <span className="grid-picker__title">{option.type}</span>
          <span className="grid-picker__size">{option.size} &times; {option.size}</span>
        </div>
      </div>
    );
  });
};

const GridPicker = ({ gridOptions, onGridSelect }) => (
  <div className="grid-picker">
    {renderGridOptions(gridOptions, onGridSelect)}
  </div>
);

export default GridPicker;
