import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Draw from 'views/draw/Draw';
import Home from 'views/home/Home';
import './App.less';

const App = () => (
  <div className="app">
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/draw" component={Draw} exact />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
