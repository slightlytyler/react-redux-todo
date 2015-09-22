import React from 'react/addons';

export default React.createClass({
  render: function() {
    var cx = React.addons.classSet;
    var classes = cx({
      'todo-item': true,
      'completed': this.props.todo.isComplete
    });

    return <li key={this.props.todo.title}
               className={classes}>
      <input type="checkbox" className="toggle" />
      <label>{this.props.todo.title}</label>
      <button className="destroy"></button>
    </li>;
  }
});