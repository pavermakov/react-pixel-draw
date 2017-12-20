import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from 'store';
import AppContainer from 'containers/app-container/AppContainer';
import registerServiceWorker from './registerServiceWorker';

import 'papercss/dist/paper.min.css';
import 'assets/styles/base/index.less';

const el = (
  <Provider store={store}>
    <AppContainer />
  </Provider>
);

ReactDOM.render(el, document.getElementById('root'));
registerServiceWorker();
