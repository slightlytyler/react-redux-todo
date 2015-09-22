import React from 'react/addons';

export default React.createClass({
  mixins: [React.addons.PureRenderMixin],

  render: function() {
    var cx = React.addons.classSet;
    var classes = cx({
      'todo-item': true,
      'completed': this.props.todo.get('isComplete')
    });

    return <li className={classes}>
      <input type="checkbox"
             className="toggle"
             onClick={() => this.props.toggle(this.props.todo)}/>
      <label>{this.props.todo.get('title')}</label>
      <button className="destroy"></button>
    </li>;
  }
});