import React from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';
import Draw from 'views/draw/Draw';
import Home from 'views/home/Home';
import './App.less';

const renderHomeView = (hasGrid) => {
  return hasGrid ? <Redirect to="/draw" /> : <Home />;
};

const renderDrawView = (hasGrid) => {
  return hasGrid ? <Draw /> : <Redirect to="/" />;
};

const App = ({ hasGrid }) => (
  <div className="app">
    <BrowserRouter>
      <Switch>
        <Route path="/" render={renderHomeView.bind(this, hasGrid)} exact />
        <Route path="/draw" render={renderDrawView.bind(this, hasGrid)} exact />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
