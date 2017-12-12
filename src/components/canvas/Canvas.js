import React from 'react';
import './Canvas.less';

const renderGrid = (grid) => {
  return grid.map((row, rowIndex) => {
    return row.map((col, colIndex) => {
      const cellStyles = {
        backgroundColor: grid[rowIndex][colIndex],
      };

      return (
        <span className="canvas__cell" style={cellStyles} key={`cell_${rowIndex}_${colIndex}`}></span>
      );
    });
  });
};

const Canvas = ({ grid }) => {
  const gridStyles = {
    'gridTemplateColumns': `repeat(${grid.length}, 1fr)`,
    'gridTemplateRows': `repeat(${grid.length}, 1fr)`,
  };

  return (
    <div className="canvas" style={gridStyles}>
      { renderGrid(grid) }
    </div>
  );
};

export default Canvas;
