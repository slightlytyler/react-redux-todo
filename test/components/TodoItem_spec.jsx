import React from 'react/addons';
import {expect} from 'chai';

import TodoItem from '../../src/components/TodoItem';

const {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag,
  Simulate
} = React.addons.TestUtils;

describe('TodoItem', () => {
  const completeTodo = renderIntoDocument(
    <TodoItem todo={{
                title: 'Complete',
                isComplete: true
              }} />
  );

  const incompleteTodo = renderIntoDocument(
    <TodoItem todo={{
                title: 'Incomplete',
                isComplete: false
              }} />
  );

  it('renders a todo list item', () => {
    expect(completeTodo.getDOMNode().textContent).to.equal('Complete');
  });

  it('applies the completed class if the todo is complete', () => {
    const completedTodoItems = scryRenderedDOMComponentsWithClass(completeTodo, 'completed');
    expect(completedTodoItems.length).to.equal(1);
  }),

  it('does not apply the completed class if the todo is incomplete', () => {
    const completedTodoItems = scryRenderedDOMComponentsWithClass(incompleteTodo, 'completed');
    expect(incompleteTodo).to.be.ok;
    expect(completedTodoItems.length).to.equal(0);
  });

  it('invokes a callback when the checkbox is clicked', () => {
    let isToggled;

    const toggle = (todo) => isToggled = !todo.isComplete;
    const component = renderIntoDocument(
      <TodoItem todo={{
                  title: 'Incomplete',
                  isComplete: false
                }}
                toggle={toggle} />
    );

    const checkbox = scryRenderedDOMComponentsWithTag(component, 'input');
    Simulate.click(checkbox[0].getDOMNode());

    expect(isToggled).to.equal(true);
  });
});

