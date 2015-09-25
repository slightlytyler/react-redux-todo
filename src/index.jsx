import React from 'react';
import { Router, Route } from 'react-router';

import { compose, createStore } from 'redux';
import { Provider } from 'react-redux';

import persistState, {mergePersistedState} from 'redux-localstorage';
import adapter from 'redux-localstorage/lib/adapters/localStorage';

import { List, fromJS } from 'immutable';

import rootReducer from './reducer';

import { setState } from './actions/todos';

import { AppContainer } from './components/App';

require('./styles.css');

const reducer = compose(
  mergePersistedState((initialState, persistedState) => {
    return initialState.merge(fromJS(persistedState));
  })
)(rootReducer);

const storage = compose()(adapter(window.localStorage));

const createPersistentStore = compose(
  persistState(storage, 'react-redux-todo')
)(createStore);

const store = createPersistentStore(reducer);

if (!store.getState().get('todos')) {
  store.dispatch(setState({
    todos: List()
  }));
}

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