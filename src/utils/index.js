export default {
  saveResults(data) {
    if (!window.localStorage) {
      return;
    }

    localStorage.setItem('grid', JSON.stringify(data));
  },

  getSavedResults() {
    if (!window.localStorage) {
      return;
    }

    let grid;

    try {
      grid = JSON.parse(localStorage.getItem('grid'));
    } catch (error) {}

    return grid;
  },

  resetResults() {
    if (!window.localStorage) {
      return;
    }
    
    localStorage.removeItem('grid');
  }
};
