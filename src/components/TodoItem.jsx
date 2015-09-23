import React from 'react/addons';

export default React.createClass({
  mixins: [React.addons.PureRenderMixin],

  render: function() {
    const { todo } = this.props;

    var cx = React.addons.classSet;
    var classes = cx({
      'todo-item': true,
      'completed': todo.get('isComplete')
    });

    return <li className={classes}>
      <input type="checkbox"
             className="toggle"
             checked={todo.get('isComplete')}
             onChange={() => this.props.toggle(todo.get('id'))}/>
      <label>{todo.get('title')}</label>
      <button className="destroy"></button>
    </li>;
  }
});