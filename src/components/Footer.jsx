import React, { PropTypes, Component } from 'react/addons';
import { SHOW_ALL, SHOW_COMPLETED, SHOW_ACTIVE } from '../constants/todo_filters';

const FILTER_TITLES = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_COMPLETED]: 'Completed'
};

class Footer extends Component {
  getRemainingTodos() {
    return this.props.todos.filter(function(todo) {
      return !todo.get('isComplete');
    });
  }

  getCompletedTodos() {
    return this.props.todos.filter(function(todo) {
      return todo.get('isComplete');
    });
  }

  renderFilter(filter) {
    const title = FILTER_TITLES[filter];

    return (
      <li key={filter}>
        <a href={title.toLowerCase()}>
          {title}
        </a>
      </li>
    );
  }

  render() {
    return (
      <footer id="footer">
        <span id="todo-count">
          <strong>{this.getRemainingTodos().size}</strong> todos left
        </span>

        <ul id="filters">
          {[SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED].map(filter =>
            this.renderFilter(filter)
          )}
        </ul>

        <button id="clear-completed"
                disabled={this.getCompletedTodos().size === 0}
                onClick={this.props.removeComplete}>
          Clear completed ({this.getCompletedTodos().size})
        </button>
      </footer>
    );
  }
}

Footer.mixins = [React.addons.PureRenderMixin]

export default Footer;