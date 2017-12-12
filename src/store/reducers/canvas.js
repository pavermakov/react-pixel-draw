const initialState = {
  size: 10,
  grid: [],
};

export default (state = initialState, action) => {
  let newState;

  switch(action.type) {
    case 'SET_NEW_GRID':
      newState = { ...state, grid: action.grid };

      return newState;
    default:
      return state;
  }
};
