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
  defaultColor: 'white',
};

export default (state = initialState, action) => {
  let newState = { ...state };

  switch(action.type) {
    case 'SET_CURRENT_COLOR':
      newState = { ...newState, currentColor: action.color };

      return newState;
    default:
      return newState;
  }
};
