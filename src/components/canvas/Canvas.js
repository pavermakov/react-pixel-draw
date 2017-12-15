import React from 'react';
import './Canvas.less';

const renderGrid = (grid, onCellClick, onCellEnter) => {
  return grid.map((row, rowIndex) => {
    return row.map((col, colIndex) => {
      const cellStyles = {
        backgroundColor: grid[rowIndex][colIndex],
      };

      return (
        <span
          className="canvas__cell"
          style={cellStyles}
          data-row={rowIndex}
          data-col={colIndex}
          key={`cell_${rowIndex}_${colIndex}`}
          onMouseDown={onCellClick}
          onMouseEnter={onCellEnter}
        ></span>
      );
    });
  });
};

const Canvas = ({ grid, onCellClick, onCellEnter }) => {
  const gridStyles = {
    'gridTemplateColumns': `repeat(${grid.length}, 1fr)`,
    'gridTemplateRows': `repeat(${grid.length}, 1fr)`,
  };

  return (
    <div className="canvas" style={gridStyles}>
      { renderGrid(grid, onCellClick, onCellEnter) }
    </div>
  );
};

export default Canvas;
