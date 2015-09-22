import React from 'react';
import Main from './component/Main';
import Footer from './component/Footer';

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
    <Footer />
  </div>,
  document.getElementById('app')
);