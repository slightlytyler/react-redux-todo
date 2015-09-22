import React from 'react';
import { fromJS } from 'immutable';

import {createStore} from 'redux';
import reducer from './reducer';

import Main from './components/Main';

require('./styles.css');

const store = createStore(reducer);
store.dispatch({
  type: 'SET_STATE',
  state: {
    todos: [{
      title: 'Learn react and redux',
      isComplete: true
    }, {
      title: '...',
      isComplete: true
    }, {
      title: 'Profit',
      isComplete: false
    }]
  }
});

const todos = fromJS([
  {
    title: 'Learn react and redux',
    isComplete: true
  },
  {
    title: '...',
    isComplete: true
  },
  {
    title: 'Profit',
    isComplete: false
  },
]);

React.render(
  <div>
    <Main todos={todos} />

    <footer id="info">
      <p>Double-click to edit a todo</p>
    </footer>
  </div>,
  document.getElementById('app')
);