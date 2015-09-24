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

  render() {
    return <input type="text"
                  id={this.props.id}
                  placeholder={this.props.placeholder}
                  onChange={this.handleChange.bind(this)}
                  onKeyDown={this.handleSubmit.bind(this)}
                  value={this.state.text} />;
  }
};

TodoTextInput.mixins = [React.addons.PureRenderMixin];

export default TodoTextInput;