import React from 'react/addons';
import {expect} from 'chai';

import TodoItem from '../../src/components/TodoItem';

const {renderIntoDocument, scryRenderedDOMComponentsWithClass, Simulate}
  = React.addons.TestUtils;

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
  })
});

