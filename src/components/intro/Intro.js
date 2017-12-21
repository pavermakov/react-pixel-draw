import React from 'react';
import PropTypes from 'prop-types';
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

Intro.propTypes = {
  gridOptions: PropTypes.arrayOf(PropTypes.shape({ type: PropTypes.string, size: PropTypes.number })).isRequired,
  onGridSelect: PropTypes.func.isRequired,
  onProceed: PropTypes.func.isRequired,
  isGridSelected: PropTypes.bool,
};

Intro.defaultProps = {
  isGridSelected: false,
};

export default Intro;
