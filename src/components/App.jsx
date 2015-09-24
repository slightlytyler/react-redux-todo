import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TodoActions from '../actions/todos';

import Main from './Main';

export const App = React.createClass({
  filteredTodos: function() {
    const filter = this.props.route.filter;
    const filterBool = filter === 'completed';

    if (filter) {
      return this.props.todos.filter(todo =>
        todo.get('isComplete') === filterBool
      );
    } else {
      return false;
    }
  },
  render: function() {
    const { dispatch } = this.props;
    const actions = bindActionCreators(TodoActions, dispatch);

    const todos = this.filteredTodos() || this.props.todos;

    return <div>
      <Main todos={todos} {...actions}/>

      <footer id="info">
        <p>Double-click to edit a todo</p>
      </footer>
    </div>;
  }
});

function mapStateToProps(state) {
  return {
    todos: state.get('todos')
  }
}

export const AppContainer = connect(mapStateToProps)(App);