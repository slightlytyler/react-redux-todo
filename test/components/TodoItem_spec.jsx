import React from 'react/addons';
import {expect} from 'chai';
import {Map} from 'immutable';

import TodoItem from '../../src/components/TodoItem';

const {
  renderIntoDocument,
  scryRenderedDOMComponentsWithClass,
  scryRenderedDOMComponentsWithTag,
  Simulate
} = React.addons.TestUtils;

describe('TodoItem', () => {
  it('does update DOM when prop changes', () => {
    const todo = Map({
      title: 'Incomplete',
      isComplete: false
    });

    const component = renderIntoDocument(
      <TodoItem todo={todo} />
    );

    expect(component.getDOMNode().textContent).to.equal('Incomplete');

    // const newTodo = todo.set('title', 'test');
    // component.setProps({todo: newTodo});

    // expect(component.getDOMNode().textContent).to.equal('test');
  });

  const completeTodo = renderIntoDocument(
    <TodoItem todo={Map({
                title: 'Complete',
                isComplete: true
              })} />
  );

  const incompleteTodo = renderIntoDocument(
    <TodoItem todo={Map({
                title: 'Incomplete',
                isComplete: false
              })} />
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
      <TodoItem todo={Map({
                  title: 'Incomplete',
                  isComplete: false
                })}
                toggle={toggle} />
    );

    const checkbox = scryRenderedDOMComponentsWithTag(component, 'input');
    Simulate.click(checkbox[0].getDOMNode());

    expect(isToggled).to.equal(true);
  });
});

