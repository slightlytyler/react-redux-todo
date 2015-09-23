import React from 'react/addons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TodoActions from '../actions/todos';

import TodoItem from './../components/TodoItem';
import Footer from './../components/Footer';

export const Main = React.createClass({
  mixins: [React.addons.PureRenderMixin],

  render: function() {
    const { todos, dispatch } = this.props;
    const actions = bindActionCreators(TodoActions, dispatch);

    return <section id="todoapp">
      <header id="header">
        <h1>todos</h1>
        <input type="text" id="new-todo" placeholder="What needs to be done?" />
      </header>

      <section id="main">
        <ul id="todo-list">
          {todos.map(todo =>
            <TodoItem key={todo.get('id')}
                      todo={todo}
                      toggle={actions.toggleComplete}/>
          )}
        </ul>

        <input type="checkbox" id="toggle-all" />
      </section>

      <Footer todos={todos} />
    </section>;
  }
});

function mapStateToProps(state) {
  return {
    todos: state.get('todos')
  }
}

export const MainContainer = connect(mapStateToProps)(Main);