import React, { Component, PropTypes } from 'react/addons';

export class TodoItem extends Component {
  render() {
    const { todo } = this.props;

    var cx = React.addons.classSet;
    var classes = cx({
      'todo-item': true,
      'completed': todo.get('isComplete')
    });

    return <li id={todo.get('id')} className={classes}>
      <input type="checkbox"
             className="toggle"
             checked={todo.get('isComplete')}
             onChange={() => this.props.toggle(todo.get('id'))} />

      <label>{todo.get('title')}</label>

      <button className="destroy"
              onClick={() => this.props.removeTodo(todo.get('id'))}>
      </button>
    </li>;
  }
};

TodoItem.mixins = [React.addons.PureRenderMixin];

export default TodoItem;