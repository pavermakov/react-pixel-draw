import React from 'react';
import GridPicker from 'components/grid-picker/GridPicker';
import IntroButton from 'components/intro-button/IntroButton';
import './Intro.less';

const Intro = ({ isGridSelected, gridOptions, onGridSelect, onProceed }) => (
  <div className="intro">
    <div className="intro__wrapper">
      <div className="intro__header">
        <h1 className="intro__text">choose grid size:</h1>
      </div>

      <div className="intro__body">
        <div className="intro__grid-picker">
          <GridPicker
            gridOptions={gridOptions}
            onGridSelect={onGridSelect}
          />
        </div>
      </div>

      <div className="intro__footer">
        <IntroButton isGridSelected={isGridSelected} onClick={onProceed}>continue &rarr;</IntroButton>
      </div>
    </div>
  </div>
);

export default Intro;
