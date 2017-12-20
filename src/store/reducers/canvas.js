const initialState = {
  size: 10,
  grid: [],
  isMouseDown: false,
};

export default (state = initialState, action) => {
  let newState = { ...state };

  switch(action.type) {
    case 'CREATE_GRID':
      const { size, defaultColor } = action;
      const newGrid = [];

      for (let row = 0; row < size; row += 1) {
        newGrid.push([]);

        for (let col = 0; col < size; col += 1) {
          newGrid[row][col] = defaultColor
        }
      }

      newState.grid = newGrid;

      return newState;
    case 'SET_CELL_COLOR':
      const { cell, color } = action;
      const { row, col } = cell;

      const modifiedRow = newState.grid[row];
      modifiedRow[col] = color;

      newState.grid = [ ...newState.grid.slice(0, row), modifiedRow, ...newState.grid.slice(row + 1) ];

      return newState;
    case 'RESET_GRID':
      newState = { ...newState, grid: newState.grid.map(row => row.map(col => action.defaultColor)) };

      return newState;
    case 'SET_MOUSE_STATE':
      newState = { ...newState, isMouseDown: action.isMouseDown };

      return newState;
    default:
      return newState;
  }
};
