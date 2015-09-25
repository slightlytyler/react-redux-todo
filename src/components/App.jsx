import React, { Component, PropTypes } from 'react/addons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { List } from 'immutable';

import * as TodoActions from '../actions/todos';

import Main from './Main';

export class App extends Component {
  getTodos() {
    return this.props.todos || List();
  }

  filteredTodos() {
    const filter = this.props.route.filter;
    const filterBool = filter === 'completed';
    const todos = this.getTodos();

    if (filter) {
      return todos.filter(todo =>
        todo.get('isComplete') === filterBool
      );
    } else {
      return todos;
    }
  }

  render() {
    const { dispatch } = this.props;
    const actions = bindActionCreators(TodoActions, dispatch);

    return <div>
      <Main todos={this.filteredTodos()} {...actions}/>

      <footer className="info">
        <p>Double-click to edit a todo</p>
      </footer>
    </div>;
  }
};

App.mixins = [React.addons.PureRenderMixin];

function mapStateToProps(state) {
  return {
    todos: state.get('todos')
  }
}

export const AppContainer = connect(mapStateToProps)(App);