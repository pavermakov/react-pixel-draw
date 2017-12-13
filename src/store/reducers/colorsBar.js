const initialState = {
  availableColors: [
    'crimson',
    'lightsalmon',
    'gold',
    'lawngreen',
    'lightskyblue',
    'royalblue',
    'rebeccapurple',
    'black',
    'aquamarine',
    'white',
  ],
  currentColor: 'crimson',
};

export default (state = initialState, action) => {
  let newState;

  switch(action.type) {
    case 'SET_CURRENT_COLOR':
      newState = { ...state, currentColor: action.color };

      return newState;
    default:
      return state;
  }
};
