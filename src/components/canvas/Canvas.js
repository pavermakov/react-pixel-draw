import React from 'react';
import PropTypes from 'prop-types';
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

Canvas.propTypes = {
  grid: PropTypes.arrayOf(PropTypes.array).isRequired,
  onCellClick: PropTypes.func.isRequired,
  onCellEnter: PropTypes.func.isRequired,
};

export default Canvas;
