import React from 'react';
import './GridPicker.less';

const GridPicker = ({ selectedGrid, gridOptions }) => (
  <div className="grid-picker">
    <div className="grid-picker__item border border-2">
      <span className="grid-picker__title">small</span>
      <span className="grid-picker__size">10 &times; 10</span>
    </div>

    <div className="grid-picker__item border border-4">
      <span className="grid-picker__title">medium</span>
      <span className="grid-picker__size">20 &times; 20</span>
    </div>

    <div className="grid-picker__item border border-5">
      <span className="grid-picker__title">large</span>
      <span className="grid-picker__size">40 &times; 40</span>
    </div>
  </div>
);

export default GridPicker;
