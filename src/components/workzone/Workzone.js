import React from 'react';
import Canvas from 'components/canvas/Canvas';
import './Workzone.less';

const Workzone = () => (
  <div className="workzone">
    <div className="workzone__canvas border border-4">
      <Canvas size={10} />
    </div>

    <div className="workzone__colors-bar border border-2">

    </div>

    <div className="workzone__controls-bar border border-5">

    </div>
  </div>
);

export default Workzone;
