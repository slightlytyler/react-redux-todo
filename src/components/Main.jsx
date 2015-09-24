import React, { Component, PropTypes } from 'react/addons';

import TodoItem from './../components/TodoItem';
import Header from './../components/Header';
import Footer from './../components/Footer';

class Main extends Component {
  getTodos() {
    return this.props.todos || [];
  }

  allTodosComplete() {
    const todos = this.getTodos();

    if (todos.size !== 0) {
      return todos.every(todo =>
        todo.get('isComplete')
      )
    }
    return false;
  }

  render() {
    const {
      addTodo,
      toggleComplete,
      removeTodo,
      toggleAll,
      removeComplete
    } = this.props;
    const todos = this.getTodos();

    return <section id="todoapp">
      <Header addTodo={addTodo}/>

      <section id="main">
        <ul id="todo-list">
          {todos.map(todo =>
            <TodoItem key={todo.get('id')}
                      todo={todo}
                      toggle={toggleComplete}
                      removeTodo={removeTodo} />
          )}
        </ul>

        <input type="checkbox"
               id="toggle-all"
               checked={this.allTodosComplete()}
               onChange={() => toggleComplete(todos.map(todo => todo.get('id')))} />
      </section>

      <Footer todos={todos}
              removeComplete={removeComplete} />
    </section>;
  }
};

Main.mixins = [React.addons.PureRenderMixin];

export default Main;