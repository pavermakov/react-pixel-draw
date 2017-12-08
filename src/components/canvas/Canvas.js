import React from 'react';
import './Canvas.less';

const renderCells = (item, index) => <span className="canvas__cell" key={`cell_${index}`}></span>;

const Canvas = ({ size }) => {
  const grid = [...Array(size * size)];
  const gridStyles = {
    'gridTemplateColumns': `repeat(${size}, 1fr)`,
    'gridTemplateRows': `repeat(${size}, 1fr)`,
  };

  return (
    <div className="canvas" style={gridStyles}>
      { grid.map(renderCells) }
    </div>
  );
};

export default Canvas;
