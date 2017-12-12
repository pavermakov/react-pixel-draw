import React from 'react';
import CanvasContainer from 'containers/canvas-container/CanvasContainer';
import ControlsBar from 'components/controls-bar/ControlsBar';
import ColorsBar from 'components/colors-bar/ColorsBar';
import './Workzone.less';

const Workzone = () => (
  <div className="workzone">
    <div className="workzone__canvas border border-4">
      <CanvasContainer />
    </div>

    <div className="workzone__controls-bar">
      <ControlsBar />
    </div>

    <div className="workzone__colors-bar border border-5">
      <ColorsBar />
    </div>
  </div>
);

export default Workzone;
