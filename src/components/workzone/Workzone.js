import React from 'react';
import CanvasContainer from 'containers/canvas-container/CanvasContainer';
import ColorsBarContainer from 'containers/colors-bar-container/ColorsBarContainer';
import ControlsBarContainer from 'containers/controls-bar-container/ControlsBarContainer';
import './Workzone.less';

const Workzone = () => (
  <div className="workzone">
    <div className="workzone__canvas border border-4">
      <CanvasContainer />
    </div>

    <div className="workzone__controls-bar">
      <ControlsBarContainer />
    </div>

    <div className="workzone__colors-bar border border-5">
      <ColorsBarContainer />
    </div>
  </div>
);

export default Workzone;
