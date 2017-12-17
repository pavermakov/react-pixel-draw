import React from 'react';
import { Link } from 'react-router-dom'
import GridPicker from 'components/grid-picker/GridPicker';
import './Intro.less';

const Intro = ({ selectedGrid, gridOptions }) => (
  <div className="intro">
    <div className="intro__wrapper">
      <div className="intro__header">
        <h1 className="intro__text">choose grid size:</h1>
      </div>

      <div className="intro__body">
        <div className="intro__grid-picker">
          <GridPicker gridOptions={gridOptions} />
        </div>
      </div>

      <div className="intro__footer">
        <Link className="intro__link border" to="/draw">continue &rarr;</Link>
      </div>
    </div>
  </div>
);

export default Intro;
