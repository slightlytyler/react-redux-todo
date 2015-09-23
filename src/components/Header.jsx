import React from 'react/addons';
import TodoTextInput from './TodoTextInput';

export default React.createClass({
  mixins: [React.addons.PureRenderMixin],

  handleSave: function(text) {
    if (text.length !== 0) {
      this.props.addTodo(text)
    }
  },

  render: function() {
    return <header id="header">
      <h1>todos</h1>

      <TodoTextInput id="new-todo"
                     placeholder="What needs to be done?"
                     onSave={this.handleSave} />
    </header>;
  }
});