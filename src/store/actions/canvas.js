export default {
  setNewGrid(grid) {
    return {
      type: 'SET_NEW_GRID',
      grid,
    };
  },

  setCellColor(cell, currentColor) {
    return {
      type: 'SET_CELL_COLOR',
      color: currentColor,
      cell,
    };
  },

  resetGrid(defaultColor) {
    return {
      type: 'RESET_GRID',
      defaultColor,
    };
  },
};
