import React from 'react';

export default React.createClass({
  getTodos: function() {
    return this.props.todos || [];
  },
  render: function() {
    return <section id="todoapp">
      <header id="header">
        <h1>todos</h1>
        <input type="text" id="new-todo" placeholder="What needs to be done?" />
      </header>

      <section id="main">
        <ul id="todo-list">
          {this.getTodos().map(todo =>
            <li key={todo.title} className={todo.isComplete ? 'completed' : ''}>
              <input type="checkbox" className="toggle" />
              <label>{todo.title}</label>
              <button className="destroy"></button>
            </li>
          )}
        </ul>

        <input type="checkbox" id="toggle-all" />
      </section>

      <footer id="footer">
        <span id="todo-count">
          <strong>2</strong> todos left</span>
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
          Clear completed (1)
        </button>
      </footer>
    </section>;
  }
});