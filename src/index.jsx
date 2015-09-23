import React from 'react';
import { fromJS } from 'immutable';

import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';

import { setState } from './actions/todos';
import { MainContainer } from './components/Main';

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

React.render(
  <Provider store={store}>
    {() => <div>
      <MainContainer />

      <footer id="info">
        <p>Double-click to edit a todo</p>
      </footer>
    </div>
    }
  </Provider>,
  document.getElementById('app')
);