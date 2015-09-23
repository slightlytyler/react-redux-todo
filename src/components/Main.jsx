import React from 'react/addons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TodoActions from '../actions/todos';

import TodoItem from './../components/TodoItem';
import Header from './../components/Header';
import Footer from './../components/Footer';

export const Main = React.createClass({
  mixins: [React.addons.PureRenderMixin],

  render: function() {
    const { todos, dispatch } = this.props;
    const actions = bindActionCreators(TodoActions, dispatch);

    return <section id="todoapp">
      <Header addTodo={actions.addTodo}/>

      <section id="main">
        <ul id="todo-list">
          {todos.map(todo =>
            <TodoItem key={todo.get('id')}
                      todo={todo}
                      toggle={actions.toggleComplete}
                      removeTodo={actions.removeTodo} />
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