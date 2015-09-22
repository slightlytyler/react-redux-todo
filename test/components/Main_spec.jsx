import React from 'react/addons';
import {expect} from 'chai';
import {fromJS} from 'immutable';

import Main from '../../src/components/Main';

const {renderIntoDocument, scryRenderedDOMComponentsWithClass}
  = React.addons.TestUtils;

describe('Main', () => {

  it('renders a list of todo items', () => {
    const component = renderIntoDocument(
      <Main todos={fromJS([{
          title: 'title 1',
          isComplete: false
        },
        {
          title: 'title 2',
          isComplete: false
        }])} />
    );
    const todoItems = scryRenderedDOMComponentsWithClass(component, 'todo-item');

    expect(todoItems.length).to.equal(2);
    expect(todoItems[0].getDOMNode().textContent).to.equal('title 1');
    expect(todoItems[1].getDOMNode().textContent).to.equal('title 2');
  });

});

