import React from 'react';

export default React.createClass({
  render: function() {
    return <li key={this.props.todo.title}
               className={this.props.todo.isComplete ?
                          'completed' :
                          ''}>
      <input type="checkbox" className="toggle" />
      <label>{this.props.todo.title}</label>
      <button className="destroy"></button>
    </li>;
  }
});