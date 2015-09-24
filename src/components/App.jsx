import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as TodoActions from '../actions/todos';

import Main from './Main';

export const App = React.createClass({
  render: function() {
    const { todos, dispatch } = this.props;
    const actions = bindActionCreators(TodoActions, dispatch);

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