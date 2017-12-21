import Cookie from 'js-cookie';

export default {
  saveResults(data) {
    Cookie.set('grid', JSON.stringify(data), { expires: 7 });
  },

  getSavedResults() {
    let grid;

    try {
      grid = JSON.parse(Cookie.get('grid'));
    } catch (error) {
      console.log(error)
    }

    return grid;
  },

  resetResults() {
    Cookie.remove('grid');
  }
};
