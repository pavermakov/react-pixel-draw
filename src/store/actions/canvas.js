export default {
  createGrid(size, defaultColor) {
    return {
      type: 'CREATE_GRID',
      size,
      defaultColor,
    };
  },

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

  setMouseState(isMouseDown) {
    return {
      type: 'SET_MOUSE_STATE',
      isMouseDown,
    };
  },
};
