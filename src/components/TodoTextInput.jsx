import React, { Component, PropTypes } from 'react/addons';

class TodoTextInput extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      text: this.props.text || ''
    };
  }

  handleSubmit(e) {
    const text = e.target.value.trim();
    if (e.which === 13) {
      this.props.onSave(text);
      this.setState({ text: '' });
    }
  }

  handleChange(e) {
    this.setState({ text: e.target.value });
  }

  handleBlur(e) {
    if (!this.props.newTodo) {
      this.props.onSave(e.target.value);
    }
  }

  render() {
    var cx = React.addons.classSet;
    var classes = cx({
      'edit': this.props.editing,
      'new-todo': this.props.newTodo
    });

    return <input type="text"
                  id={this.props.id}
                  className={classes}
                  placeholder={this.props.placeholder}
                  autoFocus="true"
                  onChange={this.handleChange.bind(this)}
                  onBlur={this.handleBlur.bind(this)}
                  onKeyDown={this.handleSubmit.bind(this)}
                  value={this.state.text} />;
  }
};

TodoTextInput.mixins = [React.addons.PureRenderMixin];

export default TodoTextInput;