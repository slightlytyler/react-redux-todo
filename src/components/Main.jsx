import React from 'react/addons';

import TodoItem from './../components/TodoItem';
import Footer from './../components/Footer';

export default React.createClass({
  mixins: [React.addons.PureRenderMixin],

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
            <TodoItem todo={todo}
                      key={todo.title} />
          )}
        </ul>

        <input type="checkbox" id="toggle-all" />
      </section>

      <Footer todos={this.getTodos()} />
    </section>;
  }
});