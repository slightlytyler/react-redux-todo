import React from 'react';
import Main from './component/Main';
import Footer from './component/Footer';

require('./styles.css');

React.render(
  <div>
    <Main />
    <Footer />
  </div>,
  document.getElementById('app')
);