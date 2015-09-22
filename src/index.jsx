import React from 'react';
import Main from './component/Main';


require('./styles.css');

const todos = [
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
];

React.render(
  <div>
    <Main todos={todos} />
    <footer id="info">
      <p>Double-click to edit a todo</p>
    </footer>
  </div>,
  document.getElementById('app')
);