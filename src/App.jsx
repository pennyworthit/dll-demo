import React, { Component } from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import Home from './home';

const reducers = () => {};

class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers, {})}>
        <Router history={createBrowserHistory()}>
          <Route path="/" component={Home} />
        </Router>
      </Provider>
    );
  }
}

export default App;