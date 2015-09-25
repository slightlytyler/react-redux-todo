import React, { Component, PropTypes } from 'react/addons';

import TodoTextInput from './TodoTextInput';

export class TodoItem extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      editing: false
    };
  }

  handleSave(id, text) {
    if (text.length === 0) {
      this.props.removeTodo(id);
    } else {
      this.props.editTodo(id, text);
    }

    this.setState({ editing: false });
  }

  handleDoubleClick() {
    this.setState({ editing: true });
  }

  render() {
    const { todo } = this.props;

    let element;

    if (this.state.editing) {
      element = (
        <TodoTextInput text={todo.get('title')}
                       editing={true}
                       onSave={(text) => this.handleSave(todo.get('id'), text)} />
      );
    } else {
      element = (
        <div className="wrapper">
          <input type="checkbox"
               className="toggle"
               checked={todo.get('isComplete')}
               onChange={() => this.props.toggle(todo.get('id'))} />

          <label onDoubleClick={this.handleDoubleClick.bind(this)}>
            {todo.get('title')}
          </label>

          <button className="destroy"
                  onClick={() => this.props.removeTodo(todo.get('id'))}>
          </button>
        </div>
      );
    }

    var cx = React.addons.classSet;
    var classes = cx({
      'todo-item': true,
      'completed': todo.get('isComplete'),
      'editing': this.state.editing
    });

    return <li className={classes}>
      {element}
    </li>;
  }
};

TodoItem.mixins = [React.addons.PureRenderMixin];

export default TodoItem;