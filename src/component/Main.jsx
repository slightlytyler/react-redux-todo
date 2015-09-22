import React from 'react';

import TodoItem from './../component/TodoItem';
import Footer from './../component/Footer';

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
            <TodoItem todo={todo} />
          )}
        </ul>

        <input type="checkbox" id="toggle-all" />
      </section>

      <Footer todos={this.getTodos()} />
    </section>;
  }
});