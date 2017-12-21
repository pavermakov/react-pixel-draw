import React from 'react';
import PropTypes from 'prop-types';
import ControlBarButton from 'components/controls-bar-button/ControlsBarButton.js';
import './ControlsBar.less';

const ControlsBar = ({ onReset, onSave }) => (
  <div className="controls-bar">
    <div className="controls-bar__row row flex-middle flex-center">
      <span className="controls-bar__button">
        <ControlBarButton styleType="btn-success" onClick={onSave}>save</ControlBarButton>
      </span>

      <span className="controls-bar__button">
        <ControlBarButton styleType="btn-warning" onClick={onReset}>reset</ControlBarButton>
      </span>
    </div>
  </div>
);

ControlsBar.propTypes = {
  onReset: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default ControlsBar;
