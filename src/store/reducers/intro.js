const initialState = {
  selectedGrid: '',
  gridOptions: [
    {
      type: 'small',
      size: 10,
    },
    {
      type: 'medium',
      size: 20,
    },
    {
      type: 'large',
      size: 40,
    },
  ],
};

export default (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    default:
      return newState;
  }
};
