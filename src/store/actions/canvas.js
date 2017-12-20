export default {
  createGrid(size, defaultColor) {
    return {
      type: 'CREATE_GRID',
      size,
      defaultColor,
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
