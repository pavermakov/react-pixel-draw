const initialState = {
  size: 10,
  grid: [],
  isMouseDown: false,
};

export default (state = initialState, action) => {
  let newState = { ...state };

  switch(action.type) {
    case 'SET_NEW_GRID':
      newState = { ...newState, grid: action.grid };

      return newState;
    case 'SET_CELL_COLOR':
      const { cell, color } = action;
      const { row, col } = cell;

      const modifiedRow = newState.grid[row];
      modifiedRow[col] = color;

      newState.grid = [ ...newState.grid.slice(0, row), modifiedRow, ...newState.grid.slice(row + 1) ];

      return newState;
    case 'RESET_GRID':
      const newGrid = newState.grid.map(row => row.map(col => action.defaultColor));
      newState = { ...newState, grid: newGrid };

      return newState;
    case 'SET_MOUSE_STATE':
      newState = { ...newState, isMouseDown: action.isMouseDown };

      return newState;
    default:
      return newState;
  }
};
