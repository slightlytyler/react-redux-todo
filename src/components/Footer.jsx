import React from 'react/addons';

export default React.createClass({
  mixins: [React.addons.PureRenderMixin],

  getRemainingTodos: function() {
    return this.props.todos.filter(function(todo) {
      return !todo.get('isComplete');
    });
  },
  getCompletedTodos: function() {
    return this.props.todos.filter(function(todo) {
      return todo.get('isComplete');
    });
  },
  render: function() {
    return <footer id="footer">
      <span id="todo-count">
        <strong>{this.getRemainingTodos().size}</strong> todos left
      </span>

      <ul id="filters">
        <li>
          <a href="all" className="selected">All</a>
        </li>
        <li>
          <a href="active">Active</a>
        </li>
        <li>
          <a href="completed">Completed</a>
        </li>
      </ul>

      <button id="clear-completed">
        Clear completed ({this.getCompletedTodos().size})
      </button>
    </footer>;
  }
});