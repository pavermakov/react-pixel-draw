const initialState = {
  gridOptions: [
    {
      type: 'small',
      size: 10,
      isSelected: false,
    },
    {
      type: 'medium',
      size: 20,
      isSelected: false,
    },
    {
      type: 'large',
      size: 40,
      isSelected: false,
    },
  ],
};

export default (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case 'SELECT_GRID':
      newState.gridOptions = newState.gridOptions.map((option) => {
        option.isSelected = option.type === action.gridType;
        return option;
      });

      return newState;
    default:
      return newState;
  }
};
