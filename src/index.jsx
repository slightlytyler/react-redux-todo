import React from 'react';
import { Router, Route } from 'react-router';

import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';

import { fromJS } from 'immutable';

import { setState } from './actions/todos';

import { AppContainer } from './components/App';

require('./styles.css');

const store = createStore(reducer);
store.dispatch(setState({
  todos: [{
    id: 1,
    title: 'Learn react and redux',
    isComplete: true
  }, {
    id: 2,
    title: '...',
    isComplete: true
  }, {
    id: 3,
    title: 'Profit',
    isComplete: false
  }]
}));

React.render((
  <Provider store={store}>
    {() =>
      <Router>
        <Route path="/" component={AppContainer}></Route>
        <Route path="/completed" component={AppContainer} filter="completed"></Route>
        <Route path="/active" component={AppContainer} filter="active"></Route>
      </Router>
    }
  </Provider>
), document.getElementById('app'))