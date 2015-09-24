import React from 'react';
import {RouteHandler} from 'react-router';

export default React.createClass({
  render: function() {
    return <div>
      <RouteHandler />

      <footer id="info">
        <p>Double-click to edit a todo</p>
      </footer>
    </div>;
  }
});