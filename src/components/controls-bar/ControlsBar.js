import React from 'react';
import ControlBarButton from 'components/controls-bar-button/ControlsBarButton.js';
import './ControlsBar.less';

const ControlsBar = () => (
  <div className="controls-bar">
    <div className="controls-bar__row row flex-middle flex-center">
      <span className="controls-bar__button">
        <ControlBarButton styleType="btn-success">save</ControlBarButton>
      </span>

      <span className="controls-bar__button">
        <ControlBarButton styleType="btn-warning">reset</ControlBarButton>
      </span>
    </div>
  </div>
);

export default ControlsBar;
