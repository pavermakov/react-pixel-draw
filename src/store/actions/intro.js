export default {
  selectGrid(gridType) {
    return {
      type: 'SELECT_GRID',
      gridType,
    };
  },
};
