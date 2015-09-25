import React, { Component, PropTypes } from 'react/addons';
import TodoTextInput from './TodoTextInput';

export class Header extends Component {
  handleSave(text) {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  }

  render() {
    return <header className="header">
      <h1>todos</h1>

      <TodoTextInput newTodo
                     id="new-todo"
                     placeholder="What needs to be done?"
                     onSave={this.handleSave.bind(this)} />
    </header>;
  }
};

Header.mixins = [React.addons.PureRenderMixin];

export default Header;